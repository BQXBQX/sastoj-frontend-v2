const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const fs = require("fs");

const app = express();

const competitionDir = path.join(__dirname, "./host_competition");
const managementDir = path.join(__dirname, "./host_management");
// const apisDir = path.join(__dirname, "./remote-apis");
// const componentsDir = path.join(__dirname, "./remote-components");
// const pagesDir = path.join(__dirname, "./remote-pages");

app.get(/^\/remote_.*/, (req, res, next) => {
  const folderName = req.path.slice(1);
  const filePath = path.join(__dirname, folderName);

  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("文件未找到");
  }
});

// Use in development environment
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://acm.sast.fun/api",
    changeOrigin: true,
    pathRewrite: {},
  })
);

// app.use("/dashboard", express.static(managementDir));
app.get("/dashboard/*", (req, res) => {
  const filePath = path.join(managementDir, req.path).replace("dashboard", "");

  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }

  res.sendFile(path.join(managementDir, "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(managementDir, "index.html"));
});

app.get("/*", (req, res) => {
  const filePath = path.join(competitionDir, req.path);

  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }

  res.sendFile(path.join(competitionDir, "index.html"));
});

app.use("/", express.static(competitionDir));

const port = 12345;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
