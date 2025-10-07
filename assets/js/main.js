// 语言切换功能
function switchLanguage() {
  // 获取当前语言
  const currentLang = document.documentElement.lang || 'zh';
  
  // 切换语言
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  
  // 更新HTML标签的语言属性
  document.documentElement.lang = newLang;
  
  // 更新所有带有data-lang-key属性的元素内容
  const elements = document.querySelectorAll('[data-lang-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    const translations = window.translations || {};
    const newText = translations[newLang]?.[key] || translations[currentLang]?.[key] || key;
    
    // 检查元素类型
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = newText;
    } else {
      element.textContent = newText;
    }
  });
  
  // 更新语言按钮文本
  const langButton = document.querySelector('.lang-btn');
  if (langButton) {
    langButton.textContent = newLang === 'zh' ? '中文' : 'English';
  }
  
  // 存储用户语言偏好到localStorage
  localStorage.setItem('preferredLanguage', newLang);
}

// 移动菜单切换功能
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
  }
}

// FAQ切换功能
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle('active');
  
  // 切换箭头图标
  const icon = element.querySelector('.faq-icon');
  if (icon) {
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
  }
}

// 产品图库切换功能
function changeMainImage(element) {
  const mainImage = document.querySelector('.product-main-image img');
  if (mainImage && element.src) {
    mainImage.src = element.src;
  }
}

// 页面滚动事件处理
function handleScroll() {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

// 表单提交处理
function handleFormSubmit(event) {
  event.preventDefault();
  
  // 在实际环境中，这里会有表单验证和提交逻辑
  // 这里仅作为示例
  
  const form = event.target;
  const formData = new FormData(form);
  let formValues = {};
  
  formData.forEach((value, key) => {
    formValues[key] = value;
  });
  
  // 模拟提交成功
  console.log('表单数据:', formValues);
  alert('感谢您的留言！我们会尽快回复您。');
  form.reset();
}

// 平滑滚动
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80, // 考虑导航栏高度
      behavior: 'smooth'
    });
  }
}

// 初始化函数
function init() {
  // 加载语言偏好
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    document.documentElement.lang = savedLang;
    const langButton = document.querySelector('.lang-btn');
    if (langButton) {
      langButton.textContent = savedLang === 'zh' ? '中文' : 'English';
    }
  }
  
  // 绑定语言切换按钮事件
  const langButton = document.getElementById('lang-toggle') || document.querySelector('.lang-btn');
  if (langButton) {
    langButton.addEventListener('click', switchLanguage);
  }
  
  // 绑定移动菜单切换按钮事件
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // 绑定FAQ问题点击事件
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      toggleFAQ(this);
    });
  });
  
  // 绑定产品缩略图点击事件
  const productThumbs = document.querySelectorAll('.product-thumbnails img');
  productThumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      changeMainImage(this);
    });
  });
  
  // 绑定表单提交事件
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // 绑定滚动事件
  window.addEventListener('scroll', handleScroll);
  
  // 初始化平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        smoothScroll(targetId);
      }
    });
  });
  
  // 移动菜单关闭（点击菜单项时）
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
    });
  });
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// 用于存储翻译数据的全局对象
window.translations = window.translations || {};