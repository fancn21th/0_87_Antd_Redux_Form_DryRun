import React from "react";
import { AutoComplete } from "antd";

const Option = AutoComplete.Option;

const debounce = function(func, wait) {
  var timeout;

  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

class Complete extends React.Component {
  handleSearch = value => {
    const { onSearch } = this.props;
    onSearch(value);
  };

  render() {
    const { source } = this.props;
    const children = source.map(({ code, value }) => {
      return <Option key={code}>{value}</Option>;
    });
    return (
      <AutoComplete
        style={{ width: 200 }}
        onSearch={debounce(this.handleSearch, 1000)}
        placeholder="input here"
      >
        {children}
      </AutoComplete>
    );
  }
}

export default Complete;
