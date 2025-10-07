# 公司网站项目

这是一个基于Jekyll的多语言、多模板公司网站项目。

## 功能特性

- 支持多语言（中文、英文）
- 多模板系统（首页、关于我们、产品、服务、联系我们）
- 响应式设计
- SEO优化
- 自动生成站点地图

## 快速开始

### 前置要求

- Ruby 2.5.0 或更高版本
- RubyGems
- GCC 和 Make

### 安装依赖

```bash
bundle install
```

### 本地开发

```bash
bundle exec jekyll serve
```

然后访问 http://localhost:4000 查看网站。

### 构建生产版本

```bash
bundle exec jekyll build
```

构建结果将输出到 `_site` 目录。

## 项目结构

- `_data/`: 存储站点数据
- `_i18n/`: 多语言翻译文件
- `_includes/`: 可重用组件
- `_layouts/`: 页面布局模板
- `_pages/`: 页面内容
- `_sass/`: SASS样式文件
- `assets/`: 静态资源（CSS、JS、图片等）

## 多语言配置

在 `_i18n/` 目录下创建对应语言的文件，例如：
- `_i18n/zh.yml`
- `_i18n/en.yml`

在这些文件中定义翻译内容。

## 多模板配置

在 `_layouts/` 目录下创建不同的布局模板，例如：
- `_layouts/home.html`
- `_layouts/about.html`
- `_layouts/products.html`
- `_layouts/services.html`
- `_layouts/contact.html`

## 部署

### GitHub Pages

1. 创建一个GitHub仓库
2. 推送代码到仓库
3. 在仓库设置中，启用GitHub Pages，选择`main`分支
4. 等待部署完成

## 贡献

欢迎贡献代码和报告问题！

## 许可证

本项目采用MIT许可证。