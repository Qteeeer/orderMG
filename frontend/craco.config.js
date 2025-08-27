const path = require("path");
const fs = require("fs");
const evalSourceMap = require("react-dev-utils/evalSourceMapMiddleware");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const noopServiceWorker = require("react-dev-utils/noopServiceWorkerMiddleware");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@api": resolvePath("./src/api"),
      "@components": resolvePath("./src/components"),
      "@context": resolvePath("./src/context"),
      "@hooks": resolvePath("./src/hooks"),
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (
          rule.use &&
          rule.use.some(
            (u) => u.loader && u.loader.includes("source-map-loader")
          )
        ) {
          rule.exclude = /node_modules/;
        }
        return rule;
      });

      return webpackConfig;
    },
  },
  eslint: false,
  devServer: (devServerConfig, { env, paths }) => {
    devServerConfig = {
      ...devServerConfig,
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middleware, devServer) => {
        if (!devServer) {
          throw new Error("webpack-dev-server is not defined");
        }

        if (fs.existsSync(paths.proxySetup)) {
          require(paths.proxySetup)(devServer.app);
        }

        middleware.push(
          evalSourceMap(devServer),
          redirectServedPath(paths.publicUrlOrPath),
          noopServiceWorker(paths.publicUrlOrPath)
        );

        return middleware;
      },
      proxy: {
        "/api": {
          target: "http://localhost:4003",
          changeOrigin: true,
          onProxyReq: (proxyReq, req, res) => {
            const clientIp =
              req.headers["x-forwarded-for"]?.split(",")[0] ||
              req.ip ||
              req.connection.remoteAddress;
            proxyReq.setHeader("X-Forwarded-For", clientIp);
          },
        },
      },
    };
    devServerConfig.client.overlay.warnings = true;
    devServerConfig.client.webSocketURL = "auto://0.0.0.0/ws";

    return devServerConfig;
  },
};
