# 企业官网（Jekyll + GitHub Pages）

功能特性
- 响应式导航条、轮播图、英雄区、特色区、客户评价、CTA、页脚
- 10 套可切换主题：classic / modern / dark / light / corporate / playful / elegant / tech / minimal / vintage
- URL 参数 ?theme=xxx 或右上角下拉菜单切换主题，自动记忆到 localStorage
- 兼容 GitHub Pages（使用 github-pages 统一依赖）

目录结构（节选）
- _layouts/default.html：页面布局（引入样式与脚本）
- _includes/header.html / footer.html / carousel.html / theme-switcher.html：通用组件
- assets/css/base.css：基础样式与组件样式
- assets/css/themes/*.css：10 套主题变量（只改色彩与阴影，不改内容）
- assets/js/theme.js：主题切换与记忆
- assets/js/carousel.js：轻量轮播图
- index.md, about.md, services.md, contact.md：示例页面
- _data/navigation.yml：导航配置

本地运行
1) 安装 Ruby 与 Bundler（示例）
   - 安装 Ruby 3.x（Windows 建议 RubyInstaller + DevKit）
   - gem install bundler
2) 安装依赖
   - bundle install
3) 启动本地预览
   - bundle exec jekyll serve
   - 访问 http://127.0.0.1:4000
4) 如果你的仓库是项目页（非用户主页）
   - 在 _config.yml 设置 baseurl: /你的仓库名
   - 访问 http://127.0.0.1:4000/你的仓库名

部署到 GitHub Pages
1) 推送到 GitHub 仓库（分支 main）
2) 打开仓库 Settings -> Pages
   - Build and deployment: Deploy from a branch
   - Branch: main，Folder: / (root)
3) 保存后等待 1-3 分钟生效
4) 访问你的 Pages 地址（若是项目页，URL 为 https://用户名.github.io/仓库名）

主题切换
- 右上角下拉框选择主题，或在地址栏添加 ?theme=tech 之类的参数
- 主题会保存在浏览器 localStorage 中，页面刷新后仍保持
- 如需默认主题，编辑 _layouts/default.html 中的主题引用或在 assets/js/theme.js 调整 initial 逻辑

自定义内容
- 修改 _config.yml 中的公司信息（company.*）
- 修改 _data/navigation.yml 调整菜单
- 在 index.md / about.md / services.md / contact.md 填入你的真实文案与图片
- 新增页面：创建 *.md 并加上 YAML Front Matter（layout: default, title, permalink）

常见问题
- 轮播图不自动播放：检查浏览器控制台是否报错；确认 assets/js/carousel.js 已加载
- 主题切换无效：清理浏览器缓存/localStorage；检查 assets/css/themes 下是否存在对应主题文件
- GitHub Pages 未生效：确认分支与目录选择正确；查看 Actions/Pages 构建日志提示

许可证
- 本示例以 MIT License 开源，可自由商用与修改（请按需替换为你的许可证策略）。