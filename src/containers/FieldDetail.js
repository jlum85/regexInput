import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectField, deleteField } from "../actions/index";
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

  const handleDelete = (name) => {
    console.log("delete " + name);
    props.deleteField(name);
    props.selectField(null);
  };

  return (
    <>
      {!field ? (
        <></>
      ) : (
        <div className="detail">
          <div className="headerParam">
            <h2>Paramétrage de : {field.name}</h2>
            <svg
              onClick={() => handleDelete(field.name)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d0021b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectField, deleteField }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldDetail);
