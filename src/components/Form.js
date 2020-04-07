import React from "react";
import FormInput from "./FormInput";

const Form = ({
  formStructure,
  formData,
  setFormData,
  formTitle,
  buttonText,
  onSubmit,
}) => {
  const getInputFromName = (name) => {
    return formStructure.reduce((acc, item) => {
      if (item.name === name) {
        acc = item;
      }
      return acc;
    }, {});
  };

  const getInputProp = (name, prop) => {
    const obj = getInputFromName(name);
    return obj.hasOwnProperty(prop) && obj[prop];
  };

  const getData = (name) => {
    let result = "";
    if (formData[name]) {
      result = formData[name].value;
    }
    return result;
  };

  const getRegexTest = (name) => {
    return formData[name] && formData[name].regexTest;
  };

  const validate = (name, value) => {
    const regex = getInputProp(name, "pattern");
    if (!value || !regex) {
      return "";
    }

    if (regex.test(value)) {
      return "valid";
    } else {
      return "invalid";
    }
  };

  const handleChange = (event) => {
    const formDataCopy = { ...formData };
    const { name, value } = event.target;
    formDataCopy[name] = {
      value: event.target.value,
      regexTest: validate(name, value),
    };
    setFormData(formDataCopy);
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <h2>{formTitle}</h2>
      {formStructure.map((f) => (
        <FormInput
          key={f.name}
          label={f.label}
          name={f.name}
          type={f.type ? f.type : "text"}
          value={getData(f.name)}
          onChange={handleChange}
          placeholder={f.placeholder}
          valid={getRegexTest(f.name)}
          errorMsg={f.description}
          patternDetail={f.patternDetail}
        />
      ))}
      <button className="submitBtn">{buttonText}</button>
      <button className="clearBtn">Tout effacer</button>
    </form>
  );
};

export default Form;
