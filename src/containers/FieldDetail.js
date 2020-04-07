import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const FieldDetail = (props) => {
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [pattern, setPattern] = useState("");
  const { activeField: field } = props;

  useEffect(() => {
    if (field) {
      setLabel(field.label);
      setDescription(field.description);
      setPattern(field.pattern);
    }
  }, [field]);

  console.log(field);
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

          <h3>patternDetail: </h3>
          {field.patternDetail &&
            field.patternDetail.map((item, index) => {
              return (
                <div key={index}>
                  <h4>pattern: {String(item.pattern)}</h4>
                  <h4>message: {item.message}</h4>
                  <h4>expected: {String(item.expected)}</h4>
                </div>
              );
            })}
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
