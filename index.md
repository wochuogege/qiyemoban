---
layout: default
title: 首页
permalink: /
---

<section class="hero">
  <div class="hero-content">
    <h1>{{ site.company.slogan }}</h1>
    <p>我们提供端到端的数字化解决方案，助力企业提升效率与竞争力。</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/services/' | relative_url }}">了解服务</a>
      <a class="btn" href="{{ '/contact/' | relative_url }}">获取报价</a>
    </div>
  </div>
</section>

{% include carousel.html %}

<section class="features">
  <h2 class="section-title">我们的优势</h2>
  <div class="grid-3">
    <div class="card">
      <h3>专业团队</h3>
      <p>拥有多年行业经验的技术与咨询团队，深刻理解业务场景。</p>
    </div>
    <div class="card">
      <h3>敏捷交付</h3>
      <p>迭代式开发与验证，快速响应变化并降低风险。</p>
    </div>
    <div class="card">
      <h3>持续保障</h3>
      <p>完善的运维与支持体系，保障系统稳定可靠。</p>
    </div>
  </div>
</section>

<section class="testimonials">
  <h2 class="section-title">客户评价</h2>
  <div class="grid-3">
    <blockquote class="quote">
      <p>他们的方案让我们的运营效率提升了 30% 以上。</p>
      <cite>—— ACME集团 CTO</cite>
    </blockquote>
    <blockquote class="quote">
      <p>从咨询到落地都很专业，值得长期合作。</p>
      <cite>—— 华东制造 CEO</cite>
    </blockquote>
    <blockquote class="quote">
      <p>技术可靠，服务周到，沟通顺畅。</p>
      <cite>—— 星辉零售 CIO</cite>
    </blockquote>
  </div>
</section>

<section class="cta">
  <h2>准备好开始了吗？</h2>
  <p>联系我们的专家团队，获得定制化方案。</p>
  <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">立即咨询</a>
</section>