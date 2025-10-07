(function() {
  function initCarousel(root) {
    const slides = root.querySelectorAll(".slide");
    const prev = root.querySelector(".prev");
    const next = root.querySelector(".next");
    const dots = root.querySelector(".dots");
    let index = 0;
    let timer = null;
    const interval = parseInt(root.getAttribute("data-interval") || "5000", 10);

    function go(i) {
      slides[index].classList.remove("active");
      dots.children[index].classList.remove("active");
      index = (i + slides.length) % slides.length;
      slides[index].classList.add("active");
      dots.children[index].classList.add("active");
    }

    function start() {
      stop();
      timer = setInterval(() => go(index + 1), interval);
    }
    function stop() { if (timer) clearInterval(timer); }

    // dots
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "切换到第 " + (i+1) + " 张");
      b.addEventListener("click", () => { go(i); start(); });
      dots.appendChild(b);
    });
    dots.children[0].classList.add("active");

    prev.addEventListener("click", () => { go(index - 1); start(); });
    next.addEventListener("click", () => { go(index + 1); start(); });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    start();
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".carousel").forEach(initCarousel);
  });
})();