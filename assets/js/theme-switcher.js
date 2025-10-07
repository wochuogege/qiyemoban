// 主题切换功能 JavaScript

// 主题列表 - 包含所有可用主题
const availableThemes = [
  { id: 'default', name: '默认主题' },
  { id: 'modern', name: '现代简约' },
  { id: 'business', name: '商务专业' },
  { id: 'creative', name: '创意设计' },
  { id: 'nature', name: '清新自然' },
  { id: 'minimal', name: '极简风格' },
  { id: 'tech', name: '科技风格' },
  { id: 'elegant', name: '优雅风格' },
  { id: 'vibrant', name: '活力多彩' },
  { id: 'retro', name: '复古风格' },
  { id: 'warm', name: '温暖柔和' },
  { id: 'dark', name: '暗黑模式' }
];

// 主题切换相关函数
class ThemeManager {
  constructor() {
    this.currentTheme = null;
    this.themeStylesheet = null;
    this.init();
  }

  // 初始化主题管理器
  init() {
    this.currentTheme = this.loadThemeFromStorage();
    this.setupThemeStylesheet();
    this.setupEventListeners();
    this.updateThemeSwitcherUI();
  }

  // 从localStorage加载保存的主题
  loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('siteTheme');
    return savedTheme && this.isValidTheme(savedTheme) ? savedTheme : 'default';
  }

  // 验证主题ID是否有效
  isValidTheme(themeId) {
    return availableThemes.some(theme => theme.id === themeId);
  }

  // 设置主题样式表
  setupThemeStylesheet() {
    // 移除可能存在的旧主题样式表
    if (this.themeStylesheet) {
      this.themeStylesheet.remove();
    }

    // 创建新的主题样式表链接
    this.themeStylesheet = document.createElement('link');
    this.themeStylesheet.id = 'theme-stylesheet';
    this.themeStylesheet.rel = 'stylesheet';
    this.themeStylesheet.href = `/assets/themes/theme-${this.currentTheme}.css`;
    document.head.appendChild(this.themeStylesheet);

    // 更新body的主题类
    this.updateBodyThemeClass();
  }

  // 更新body的主题类
  updateBodyThemeClass() {
    // 移除所有主题类
    availableThemes.forEach(theme => {
      document.body.classList.remove(`theme-${theme.id}`);
    });

    // 添加当前主题类
    document.body.classList.add(`theme-${this.currentTheme}`);
  }

  // 设置事件监听器
  setupEventListeners() {
    // 主题切换按钮点击事件
    const themeToggle = document.querySelector('.theme-switcher-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleThemeSwitcher());
    }

    // 点击外部关闭主题切换面板
    document.addEventListener('click', (e) => {
      const themeSwitcher = document.querySelector('.theme-switcher');
      const themeToggle = document.querySelector('.theme-switcher-toggle');

      if (themeSwitcher && themeToggle && 
          !themeSwitcher.contains(e.target) && 
          e.target !== themeToggle) {
        this.closeThemeSwitcher();
      }
    });

    // 关闭按钮点击事件
    const closeButton = document.querySelector('.theme-switcher-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.closeThemeSwitcher());
    }

    // 重置按钮点击事件
    const resetButton = document.querySelector('.theme-switcher-reset');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        this.switchTheme('default');
        this.closeThemeSwitcher();
      });
    }

    // 主题选项点击事件 - 适配新的HTML结构
    document.querySelectorAll('.theme-item').forEach(option => {
      option.addEventListener('click', (e) => {
        const themeId = e.currentTarget.getAttribute('data-theme-id');
        if (themeId) {
          this.switchTheme(themeId);
          this.closeThemeSwitcher();
        }
      });
    });
  }

  // 切换主题
  switchTheme(themeId) {
    if (!this.isValidTheme(themeId)) return;

    this.currentTheme = themeId;
    this.saveThemeToStorage();
    this.setupThemeStylesheet();
    this.updateThemeSwitcherUI();
    this.showThemeChangeNotification();
  }

  // 将主题保存到localStorage
  saveThemeToStorage() {
    localStorage.setItem('siteTheme', this.currentTheme);
  }

  // 切换主题切换器面板的显示/隐藏
  toggleThemeSwitcher() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    if (themeSwitcher) {
      themeSwitcher.classList.toggle('active');
    }
  }

  // 关闭主题切换器面板
  closeThemeSwitcher() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    if (themeSwitcher) {
      themeSwitcher.classList.remove('active');
    }
  }

  // 更新主题切换器UI，标记当前选中的主题
  updateThemeSwitcherUI() {
    // 移除所有选中状态
    document.querySelectorAll('.theme-item').forEach(option => {
      option.classList.remove('active');
    });

    // 标记当前主题为选中状态
    const activeOption = document.querySelector(`.theme-item[data-theme-id="${this.currentTheme}"]`);
    if (activeOption) {
      activeOption.classList.add('active');
    }
  }

  // 显示主题切换通知
  showThemeChangeNotification() {
    // 获取当前主题名称
    const currentTheme = availableThemes.find(theme => theme.id === this.currentTheme);
    if (!currentTheme) return;

    // 创建通知元素
    let notification = document.querySelector('.theme-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.className = 'theme-notification';
      document.body.appendChild(notification);
    }

    // 设置通知内容并显示
    notification.textContent = `已切换至「${currentTheme.name}」主题`;
    notification.classList.add('show');

    // 3秒后自动隐藏通知
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }

  // 获取当前主题
  getCurrentTheme() {
    return this.currentTheme;
  }
}

// 页面加载完成后初始化主题管理器
window.addEventListener('DOMContentLoaded', () => {
  // 检查是否有预渲染的主题切换器，如果没有则初始化
  const themeSwitcher = document.querySelector('.theme-switcher');
  if (themeSwitcher) {
    // 初始化主题管理器
    window.themeManager = new ThemeManager();
  }

  // 添加主题切换通知的样式
  const style = document.createElement('style');
  style.textContent = `
    .theme-notification {
      position: fixed;
      top: 80px;
      right: -300px;
      background-color: #333;
      color: white;
      padding: 15px 25px;
      border-radius: 5px 0 0 5px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 9999;
      transition: right 0.3s ease;
      font-size: 14px;
    }
    
    .theme-notification.show {
      right: 0;
    }
    
    @media (max-width: 768px) {
      .theme-notification {
        top: auto;
        bottom: 80px;
        right: -300px;
        border-radius: 5px 5px 0 5px;
      }
      
      .theme-notification.show {
        right: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// 添加页面滚动时的主题切换器位置调整
window.addEventListener('scroll', () => {
  const themeToggle = document.querySelector('.theme-switcher-toggle');
  if (themeToggle) {
    // 可以根据滚动位置调整主题切换按钮的样式或位置
    if (window.scrollY > 200) {
      themeToggle.style.transform = 'translateY(0)';
    } else {
      themeToggle.style.transform = 'translateY(0)';
    }
  }
});