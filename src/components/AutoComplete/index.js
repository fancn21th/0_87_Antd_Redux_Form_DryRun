import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./AutoComplete.css";
import AutoComplete from "../../shared/AutoComplete";
const FormItem = Form.Item;

class AutoCompleteForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const suppliers = [
      {
        id: "X001",
        code: "X001",
        value: "supplier name x1"
      },
      {
        id: "X002",
        code: "X002",
        value: "supplier name x2"
      },
      {
        id: "X003",
        code: "X003",
        value: "supplier name x3"
      }
    ];
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("supplier", {
            rules: [{ required: true, message: "Please select a supplier!" }]
          })(<AutoComplete source={suppliers} />)}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedAutoCompleteForm = Form.create()(AutoCompleteForm);

export default WrappedAutoCompleteForm;
