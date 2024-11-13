# SAST Online Judge Frontend V2

**Supported by Module Federation**

This is the front-end repository of SAST Online Judge V2, which contains all the front-end codes and documents of SASTOJ. SASTOJ is an OJ system that natively supports distributed deployment to meet the low bandwidth requirements of the computer room, and also supports stand-alone deployment. With SASTOJ, you can quickly start an IOI competition. Players can run the code online (without submitting, including input data, referred to as running) and view the compilation results and running output, submit the code and see the evaluation results in real time (referred to as judging or submitting), view the ranking list during the competition, and support multiple languages ​​(check the programming language when submitting).

## 📦 Project Structure

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

Competition is the competition front end, management is the competition system management end, and practice is the daily practice front end.

# 🚀 Quick Start

Since module federation is used, libs remote must be running before the host start.

```bash
# run remote libs
pnpm run libs:dev

# run host management
pnpm run management:dev

# run host competition
pnpm run competition:dev
```
