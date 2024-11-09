export default {
  "./apps/host-competition/**.{js,cjs,ts,json,css,scss,tsx,sass,vue}": () => [
    "pnpm --filter @sastoj-frontend-v2/host-competition lint",
    "pnpm --filter @sastoj-frontend-v2/host-competition build",
    "pnpm --filter @sastoj-frontend-v2/host-competition format",
    "git add .",
  ],
  "./libs/remote-components/**.{js,cjs,ts,json,css,scss,tsx,sass,vue}": () => [
    "pnpm --filter @sastoj-frontend-v2/remote-components lint",
    "pnpm --filter @sastoj-frontend-v2/remote-components build",
    "pnpm --filter @sastoj-frontend-v2/remote-components format",
    "git add .",
  ],
  "./libs/remote-pages/**.{js,cjs,ts,json,css,scss,tsx,sass,vue}": () => [
    "pnpm --filter @sastoj-frontend-v2/remote-pages lint",
    "pnpm --filter @sastoj-frontend-v2/remote-pages build",
    "pnpm --filter @sastoj-frontend-v2/remote-pages format",
    "git add .",
  ],
};
