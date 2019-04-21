const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("babel-plugin-import", {
    libraryName: "antd",
    style: true
  }),
  // https://github.com/timarney/react-app-rewired/issues/348
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
