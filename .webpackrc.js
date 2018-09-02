const path = require('path');

export default {
  "alias": {
    "components": path.resolve(__dirname,
    "./src/components"),
    "models": path.resolve(__dirname,
    "./src/models"),
    "routes": path.resolve(__dirname,
    "./src/routes"),
    "assets": path.resolve(__dirname,
      "./src/assets"),
    "layouts": path.resolve(__dirname,
      "./src/layouts"),
    "services": path.resolve(__dirname,
      "./src/services"),
    "utils": path.resolve(__dirname,
      "./src/utils"),
    "views": path.resolve(__dirname,
      "./src/views"),
    "variables": path.resolve(__dirname,
      "./src/variables")
  }
}
