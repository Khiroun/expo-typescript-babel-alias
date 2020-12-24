module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".android.js",
            "android.tsx",
            "ios.js",
            "ios.tsx",
          ],
          root: ["./src"],
          alias: {
            Counter: ["./src/app-main/lib/Counter.tsx"],
          },
        },
      ],
    ],
  };
};
