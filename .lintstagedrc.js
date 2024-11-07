export default {
  "./libs/**/**.{js,cjs,ts,json,css,scss,tsx,sass,vue}": () => [
    "pnpm lint",
    "pnpm format",
    "git add .",
  ],
};
