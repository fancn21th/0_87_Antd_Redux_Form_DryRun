import React from "react";
import { AutoComplete } from "antd";

const Option = AutoComplete.Option;
class Complete extends React.Component {
  handleSearch = value => {};

  render() {
    const { source } = this.props;
    const children = source.map(({ code, value }) => {
      return <Option key={code}>{value}</Option>;
    });
    return (
      <AutoComplete
        style={{ width: 200 }}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
        {children}
      </AutoComplete>
    );
  }
}

export default Complete;
