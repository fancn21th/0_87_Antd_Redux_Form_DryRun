import React from "react";
import { Form, Button } from "antd";
import "./AutoComplete.css";
import AutoComplete from "../../shared/AutoComplete";
import fetchSuppliers from "../../actions/fetchSuppliers";
import { connect } from "react-redux";
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
    const { suppliers, fetchSuppliers } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <AutoComplete
          filedName={"supplier"}
          errorMessage={"Please select a supplier!"}
          source={suppliers}
          onSearch={value => fetchSuppliers(value)}
          form={this.props.form}
          placeholder={"search supplier"}
        />
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

const mapStateToProps = state => {
  return {
    suppliers: state.autoComplete.suppliers
  };
};

const WrappedAutoCompleteForm = Form.create()(
  connect(
    mapStateToProps,
    {
      fetchSuppliers
    }
  )(AutoCompleteForm)
);

export default WrappedAutoCompleteForm;
