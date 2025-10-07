(function() {
  const THEMES = ["classic","modern","dark","light","corporate","playful","elegant","tech","minimal","vintage"];
  function fromIndex(i) {
    const idx = Math.max(1, Math.min(10, parseInt(i, 10))) - 1;
    return THEMES[idx];
  }

  // 从 HTML data-* 读取主题数字与锁定开关（由 _layouts/default.html 注入）
  const root = document.documentElement;
  const CONFIG_INDEX = parseInt(root.getAttribute("data-theme-index") || "1", 10);
  const LOCK = (root.getAttribute("data-lock-theme") === "true");

  function applyTheme(theme) {
    const link = document.getElementById("theme-stylesheet");
    if (link) {
      const base = document.documentElement.getAttribute("data-baseurl") || "";
      link.setAttribute("href", base + "/assets/css/themes/" + theme + ".css");
    }
    // 在未锁定时才记忆，锁定模式下每次以配置为准
    if (!LOCK) {
      try { localStorage.setItem("site-theme", theme); } catch(e) {}
    }
    const select = document.getElementById("theme-select");
    if (select) select.value = theme;
  }

  document.addEventListener("DOMContentLoaded", function() {
    // baseurl 已在 HTML 的 data-baseurl 注入

    let initial;
    if (LOCK) {
      // 完全以 _config.yml 的数字为准
      initial = fromIndex(CONFIG_INDEX);
    } else {
      const paramTheme = new URLSearchParams(location.search).get("theme");
      let saved = null;
      try { saved = localStorage.getItem("site-theme"); } catch(e) {}
      initial = paramTheme && THEMES.includes(paramTheme)
        ? paramTheme
        : (saved && THEMES.includes(saved) ? saved : fromIndex(CONFIG_INDEX));
    }

    applyTheme(initial);

    const select = document.getElementById("theme-select");
    if (select) {
      if (LOCK) {
        select.disabled = true;
        select.title = "已锁定为配置主题（_config.yml -> theme_index）";
      } else {
        select.addEventListener("change", function() {
          applyTheme(this.value);
          const url = new URL(window.location.href);
          url.searchParams.set("theme", this.value);
          history.replaceState({}, "", url.toString());
        });
      }
    }
  });
})();