import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PatternDetail from "../components/PatternDetail";

const FieldDetail = (props) => {
  const [label, setLabel] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [description, setDescription] = useState("");
  const [pattern, setPattern] = useState("");
  const { activeField: field } = props;

  useEffect(() => {
    if (field) {
      setLabel(field.label);
      setPlaceHolder(field.placeholder);
      setDescription(field.description);
      setPattern(field.pattern);
    }
  }, [field]);

  return (
    <>
      {!field ? (
        <></>
      ) : (
        <div className="detail">
          <h2>Paramétrage de : {field.name}</h2>
          <form>
            <label htmlFor="label">Titre</label>
            <input
              name="label"
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              autoComplete="off"
            ></input>

            <label htmlFor="placeHolder">Placeholder</label>
            <input
              name="placeHolder"
              type="text"
              value={placeHolder}
              onChange={(e) => setPlaceHolder(e.target.value)}
              autoComplete="off"
            ></input>

            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="off"
            ></input>

            <label htmlFor="pattern">Expression régulière</label>
            <input
              name="pattern"
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              autoComplete="off"
            ></input>
          </form>

          <PatternDetail patternDetail={field.patternDetail} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    activeField: state.activeField,
  };
};

export default connect(mapStateToProps)(FieldDetail);
