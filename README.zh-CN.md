# SAST Online Judge Frontend V2

**使用模块联邦实现多模块**

这是 SAST Online Judge V2 的前端代码仓库，包含 SASTOJ 的所有前端代码和文档。SASTOJ 是一个原生支持分布式部署的 OJ 系统，可以满足机房的低带宽需求，同时也支持单机部署。通过 SASTOJ，您可以快速开启一场 IOI 比赛。选手可以在线运行代码（无需提交，包括输入数据，称为运行），查看编译结果和运行输出；提交代码并实时查看评测结果（称为评测或提交）；在比赛期间查看排行榜，并支持多种编程语言（提交时可选择编程语言）。

## 📦 项目结构

```bash
sastoj-frontend-v2/
├── apps/
│   ├── host-management/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   ├── host-competition/
│   └── host-practice/
├── libs/
│   ├── remote-components/
│   ├── remote-pages/
│   ├── remote-utils/
│   ├── remote-auth/
│   ├── remote-apis/
│   └── remote-stores/
├── types/
├── nx.json
└── package.json
```

**competition 是比赛前端，management 是赛制管理端，practice 是日常练习前端。**
