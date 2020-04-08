import React from "react";
import FormInput from "./FormInput";
import { connect } from "react-redux";
import { selectField } from "../actions/index";
import { bindActionCreators } from "redux";

const Form = (props) => {
  const {
    formStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit,
  } = props;

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
    return regex.test(value) ? "valid" : "invalid";
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

  const onClear = () => {
    setFormData([]);
    props.selectField(null);
  };

  return (
    <form onSubmit={onSubmit}>
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
          onUpdate={() => props.selectField(f)}
        />
      ))}
      <button className="submitBtn">{buttonText}</button>
      <button className="clearBtn" onClick={onClear}>
        Tout effacer
      </button>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectField: selectField }, dispatch);
}

export default connect(null, mapDispatchToProps)(Form);
