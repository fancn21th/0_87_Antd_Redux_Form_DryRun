import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "./ReduxForm.css";
import fetchSuppliers from "../../actions/fetchSuppliers";
import AutoComplete from "../../shared/AutoComplete";

const validate = (values, { suppliers }) => {
  const errors = {};
  if (!values.supplier) {
    errors.supplier = "Supplier is required";
  }
  if (
    values.supplier &&
    suppliers.findIndex(item => item.code === values.supplier) === -1
  ) {
    errors.supplier = "Please select a supplier from dropdown list";
  }
  return errors;
};

const ReduxForm = props => {
  const { suppliers, handleSubmit, fetchSuppliers } = props;

  const onSearch = value => fetchSuppliers(value);

  return (
    <form onSubmit={handleSubmit} className="redux-form">
      <Field
        name="supplier"
        type="text"
        component={AutoComplete}
        source={suppliers}
        onSearch={onSearch}
        label="Supplier"
      />
      <button
        type="submit"
        onClick={handleSubmit(data => {
          console.log(data);
        })}
      >
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    suppliers: state.reduxForm.suppliers
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSuppliers
  }
)(
  reduxForm({
    // a unique name for the form
    form: "reduxForm",
    validate
  })(ReduxForm)
);
