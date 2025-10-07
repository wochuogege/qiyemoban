// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 轮播图自动播放
  var carouselElement = document.querySelector('#heroCarousel');
  if (carouselElement) {
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: 'hover'
    });
  }
  
  // 平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 表单提交处理
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // 简单验证
      if (name && email && subject && message) {
        // 显示成功消息
        alert('感谢您的消息！我们会尽快回复您。');
        // 重置表单
        contactForm.reset();
      } else {
        alert('请填写所有必填字段。');
      }
    });
  }
});