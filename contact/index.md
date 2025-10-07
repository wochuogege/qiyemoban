---
layout: page
title: 联系我们
permalink: /contact/
---

<div class="row">
  <div class="col-md-8">
    <h2>发送消息</h2>
    <form>
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
        <h5>联系信息</h5>
      </div>
      <div class="card-body">
        <p><i class="bi bi-geo-alt me-2"></i> 地址: 某某街道123号</p>
        <p><i class="bi bi-telephone me-2"></i> 电话: (123) 456-7890</p>
        <p><i class="bi bi-envelope me-2"></i> 邮箱: info@example.com</p>
        <p><i class="bi bi-clock me-2"></i> 工作时间: 周一至周五 9:00-18:00</p>
      </div>
    </div>
    
    <div class="card mt-4">
      <div class="card-header">
        <h5>办公地图</h5>
      </div>
      <div class="card-body">
        <img src="https://via.placeholder.com/300x200/6c757d/ffffff?text=公司位置地图" class="img-fluid" alt="公司位置地图">
      </div>
    </div>
  </div>
</div>