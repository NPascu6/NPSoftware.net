module.exports = {
  extends: "airbnb-base",
  rules: {
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix"
    ] // https://stackoverflow.com/q/39114446/2771889
  }
};
