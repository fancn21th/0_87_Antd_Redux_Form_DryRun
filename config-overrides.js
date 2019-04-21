const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  // https://github.com/ant-design/ant-design-mobile/issues/3094
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
