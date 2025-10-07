---
layout: default
title: 联系我们
permalink: /contact/
---

<section class="section">
  <h1>联系我们</h1>
  <p>填写表单或通过电话/邮箱与我们联系。</p>
  <form class="contact-form" action="#" onsubmit="event.preventDefault(); alert('已收到您的信息，我们会尽快联系您。');">
    <div class="grid-2">
      <input type="text" placeholder="姓名" required>
      <input type="email" placeholder="邮箱" required>
    </div>
    <input type="text" placeholder="公司/组织">
    <textarea rows="5" placeholder="需求描述" required></textarea>
    <button class="btn btn-primary" type="submit">提交</button>
  </form>
</section>