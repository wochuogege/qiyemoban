---
layout: page
title: 联系我们
---

<div class="row">
  <div class="col-md-8">
    <h2><i class="bi bi-envelope me-2"></i>发送消息</h2>
    <form class="mt-4">
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <input type="text" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">邮箱</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">主题</label>
        <input type="text" class="form-control" id="subject" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">消息</label>
        <textarea class="form-control" id="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">发送消息</button>
    </form>
  </div>
  
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-info-circle me-2"></i>联系信息</h5>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li class="contact-info mb-3">
            <i class="bi bi-geo-alt"></i>
            <strong>地址:</strong> 某某街道123号
          </li>
          <li class="contact-info mb-3">
            <i class="bi bi-telephone"></i>
            <strong>电话:</strong> (123) 456-7890
          </li>
          <li class="contact-info mb-3">
            <i class="bi bi-envelope"></i>
            <strong>邮箱:</strong> info@example.com
          </li>
          <li class="contact-info">
            <i class="bi bi-clock"></i>
            <strong>工作时间:</strong> 周一至周五 9:00-18:00
          </li>
        </ul>
      </div>
    </div>
    
    <div class="card mt-4">
      <div class="card-header">
        <h5><i class="bi bi-map me-2"></i>办公地图</h5>
      </div>
      <div class="card-body">
        <img src="https://via.placeholder.com/300x200/6c757d/ffffff?text=公司位置地图" class="img-fluid" alt="公司位置地图">
      </div>
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="mb-4"><i class="bi bi-question-circle me-2"></i>常见问题</h2>
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            如何获取报价？
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            您可以通过联系我们的销售团队获取详细报价。请填写联系表单或直接致电我们的客服热线。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            项目完成需要多长时间？
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            项目周期取决于项目的复杂程度和规模。一般来说，小型项目需要2-4周，中型项目需要1-3个月，大型项目可能需要3-6个月。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            是否提供售后服务？
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            是的，我们提供完善的售后服务。项目完成后，我们提供3-12个月的免费维护期，具体时长根据项目规模确定。
          </div>
        </div>
      </div>
    </div>
  </div>
</div>