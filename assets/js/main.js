// 网站主要交互功能JavaScript

// DOM元素加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换功能
  initMobileMenu();
  
  // 滚动时的头部样式变化
  initScrollEffects();
  
  // 平滑滚动到锚点
  initSmoothScroll();
  
  // 下拉菜单动画效果
  initDropdownMenus();
  
  // 返回顶部按钮
  initBackToTop();
});

// 初始化移动端菜单
function initMobileMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      // 切换菜单显示状态
      navbarCollapse.classList.toggle('show');
      
      // 切换按钮图标状态
      navbarToggler.classList.toggle('active');
      
      // 阻止页面滚动
      document.body.style.overflow = navbarCollapse.classList.contains('show') ? 'hidden' : '';
    });
    
    // 点击菜单项后关闭菜单
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 991.98) {
          navbarCollapse.classList.remove('show');
          navbarToggler.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }
}

// 初始化滚动效果
function initScrollEffects() {
  const header = document.querySelector('.header');
  
  if (header) {
    // 初始滚动位置检查
    checkScrollPosition();
    
    // 滚动事件监听
    window.addEventListener('scroll', function() {
      checkScrollPosition();
      updateBackToTopVisibility();
    });
    
    function checkScrollPosition() {
      // 当页面滚动超过100px时，添加scrolled类
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}

// 初始化平滑滚动
function initSmoothScroll() {
  // 为所有锚点链接添加平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // 阻止默认锚点行为
      e.preventDefault();
      
      // 获取目标ID
      const targetId = this.getAttribute('href');
      
      // 如果目标是当前页面的锚点
      if (targetId !== '#' && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // 计算滚动位置（考虑头部高度）
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          // 平滑滚动到目标位置
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// 初始化下拉菜单
function initDropdownMenus() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    const dropdownMenu = item.querySelector('.dropdown-menu');
    
    if (dropdownMenu) {
      // 鼠标悬停显示下拉菜单
      item.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
        
        // 添加淡入效果
        setTimeout(() => {
          dropdownMenu.style.opacity = '1';
          dropdownMenu.style.transform = 'translateY(0)';
        }, 10);
      });
      
      // 鼠标离开隐藏下拉菜单
      item.addEventListener('mouseleave', function() {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
          dropdownMenu.style.display = 'none';
        }, 300);
      });
      
      // 初始化下拉菜单样式
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.transform = 'translateY(-10px)';
      dropdownMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
  });
}

// 初始化返回顶部按钮
function initBackToTop() {
  // 创建返回顶部按钮
  let backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopButton.ariaLabel = '返回顶部';
  document.body.appendChild(backToTopButton);
  
  // 添加返回顶部按钮样式
  const style = document.createElement('style');
  style.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      z-index: 99;
    }
    
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    
    .back-to-top:hover {
      background-color: #0056b3;
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    .back-to-top i {
      font-size: 1.25rem;
    }
    
    @media (max-width: 768px) {
      .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
      
      .back-to-top i {
        font-size: 1rem;
      }
    }
    
    /* 暗黑模式样式 */
    body.theme-dark .back-to-top {
      background-color: #6c5ce7;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    body.theme-dark .back-to-top:hover {
      background-color: #5f3dc4;
    }
  `;
  document.head.appendChild(style);
  
  // 点击返回顶部
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 检查按钮是否应该显示
  updateBackToTopVisibility();
  
  function updateBackToTopVisibility() {
    if (window.scrollY > 500) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }
}

// 在窗口大小改变时重新初始化菜单
window.addEventListener('resize', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse && window.innerWidth > 991.98) {
    // 在大屏幕上，确保菜单是默认隐藏状态
    navbarCollapse.classList.remove('show');
    navbarToggler.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// 导出函数，方便其他文件使用
export { 
  initMobileMenu, 
  initScrollEffects, 
  initSmoothScroll, 
  initDropdownMenus, 
  initBackToTop 
};