import React, { useState } from "react";
import Form from "../components/Form";
import { fields } from "../components/FormStructure";

const SignUp = () => {
  const [inputs, setInputs] = useState([]);
  console.log({ inputs });

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit ok ");
  };

  return (
    <Form
      formTitle="Création d'un nouveau compte"
      formStructure={fields}
      formData={inputs}
      setFormData={setInputs}
      buttonText="Valider"
      onSubmit={onSubmit}
    />
  );
};

export default SignUp;
