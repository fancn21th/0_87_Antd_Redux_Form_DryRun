import React from "react";
import { AutoComplete, Form } from "antd";
const FormItem = Form.Item;
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
    const { source, form, filedName, errorMessage, placeholder } = this.props;
    const { getFieldDecorator } = form;
    const children = source.map(({ code, value }) => {
      return <Option key={code}>{value}</Option>;
    });
    const onDebounceSearch = debounce(this.handleSearch, 1000);
    // TODO: getFieldDecorator not working well with debounce
    return (
      <FormItem>
        {getFieldDecorator(filedName, {
          rules: [{ required: true, message: errorMessage }]
        })(
          <AutoComplete
            style={{ width: 200 }}
            onSearch={onDebounceSearch}
            placeholder={placeholder}
          >
            {children}
          </AutoComplete>
        )}
      </FormItem>
    );
  }
}

export default Complete;
