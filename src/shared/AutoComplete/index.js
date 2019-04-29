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
    const {
      source,
      label,
      placeholder,
      hasFeedback,
      labelSpan,
      wrapperSpan,
      input,
      type,
      meta: { touched, error, asyncValidating }
    } = this.props;
    const children = source.map(({ code, value }) => {
      return <Option key={code}>{value}</Option>;
    });
    return (
      <FormItem
        label={label}
        help={touched && error}
        labelCol={{ span: labelSpan === undefined ? "8" : labelSpan }}
        wrapperCol={{ span: wrapperSpan === undefined ? "16" : wrapperSpan }}
        hasFeedback={
          hasFeedback === undefined || hasFeedback === true ? true : false
        }
        validateStatus={
          asyncValidating ? "validating" : touched && error ? "error" : ""
        }
      >
        <AutoComplete
          {...input}
          style={{ width: 200 }}
          onSearch={debounce(this.handleSearch, 1000)}
          placeholder={placeholder}
        >
          {children}
        </AutoComplete>
      </FormItem>
    );
  }
}

export default Complete;
