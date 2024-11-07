export default {
  "./apps/host-competition/**.{js,cjs,ts,json,css,scss,tsx,sass,vue}": () => [
    "pnpm --filter @sastoj-frontend/host-competition lint",
    "pnpm --filter @sastoj-frontend/host-competition build",
    "pnpm --filter @sastoj-frontend/host-competition format",
    "git add .",
  ],
};
