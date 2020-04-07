import React, { useState } from "react";
import Form from "../components/Form";
// import { fields } from "../components/FormStructure";
import { connect } from "react-redux";

const FieldList = (props) => {
  const [inputs, setInputs] = useState([]);
  console.log({ inputs });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      formTitle="Création d'un nouveau compte"
      formStructure={props.fields}
      formData={inputs}
      setFormData={setInputs}
      buttonText="Valider"
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    fields: state.fields,
  };
};

export default connect(mapStateToProps)(FieldList);
