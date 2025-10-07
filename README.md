# 企业网站模板集合

这是一个基于Jekyll的企业网站模板集合，提供10种不同的网站风格供选择。

## 功能特点

- 响应式设计，适配各种设备
- 10种不同的网站模板风格
- 丰富的组件：导航条、轮播图、卡片布局等
- 完整的页面结构：首页、关于我们、服务项目、新闻资讯、联系我们等
- 美观的UI设计和交互效果
- 易于定制和扩展

## 模板风格

1. 蓝色商务风格
2. 绿色环保风格
3. 红色热情风格
4. 紫色创意风格
5. 橙色活力风格
6. 灰色简约风格
7. 黑色经典风格
8. 粉色温馨风格
9. 青色清新风格
10. 黄色明亮风格

## GitHub Pages兼容性

本项目已针对GitHub Pages的默认环境进行了优化，使用与GitHub Pages完全一致的依赖版本：

- **Jekyll版本**: 3.10.0
- **Ruby版本**: 3.3.4
- **关键依赖**: 
  - kramdown 2.4.0
  - kramdown-parser-gfm 1.1.0
  - liquid 4.0.4
  - rouge 3.30.0
  - minima 2.5.1

### 部署到GitHub Pages

1. 将此仓库推送到GitHub
2. 在仓库设置中找到"Pages"选项
3. 选择"GitHub Actions"作为构建和部署源
4. 保存设置，GitHub会自动使用我们提供的工作流文件构建和部署网站

项目包含一个预配置的GitHub Actions工作流文件[.github/workflows/jekyll.yml](.github/workflows/jekyll.yml)，它会自动处理网站的构建和部署过程。

## 本地开发（需要安装Ruby环境）

1. 安装Ruby和Jekyll：
   ```
   gem install jekyll bundler
   ```
2. 克隆项目并进入项目目录
3. 安装依赖：
   ```
   bundle install
   ```
4. 启动本地服务器：
   ```
   bundle exec jekyll serve
   ```
5. 在浏览器中访问 http://localhost:4000

## 文件结构

```
├── _config.yml          # Jekyll配置文件
├── _layouts/            # 页面布局模板
├── _includes/           # 可复用组件
├── assets/              # 静态资源文件
├── template/            # 模板示例页面
├── about/               # 关于我们页面
├── contact/             # 联系我们页面
├── services/            # 服务项目页面
├── news/                # 新闻资讯页面
├── index.md             # 首页
├── templates.md         # 模板选择页面
├── .github/workflows/   # GitHub Actions工作流
│   └── jekyll.yml       # 自动部署配置
└── README.md            # 说明文档
```

## 自定义网站内容

1. 修改 [_config.yml](_config.yml) 文件中的网站标题、描述等基本信息
2. 替换 [index.md](index.md) 中的首页内容
3. 更新 [about/index.md](about/index.md) 中的公司信息
4. 修改 [services/index.md](services/index.md) 中的服务项目
5. 更新 [contact/index.md](contact/index.md) 中的联系信息
6. 添加或修改新闻资讯内容

## 更换网站风格

要更换网站的整体风格，只需在 [_layouts/default.html](_layouts/default.html) 文件中修改body标签的class属性：

```html
<body class="template-blue">  <!-- 蓝色商务风格 -->
<body class="template-green"> <!-- 绿色环保风格 -->
<!-- 其他风格类名请参考 assets/css/styles.scss -->
```

## 技术栈

- [Jekyll](https://jekyllrb.com/) - 静态网站生成器
- [Bootstrap 5](https://getbootstrap.com/) - CSS框架
- [Bootstrap Icons](https://icons.getbootstrap.com/) - 图标库

## 许可证

本项目基于MIT许可证开源，您可以自由使用和修改。