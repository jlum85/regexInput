import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectField,
  deleteField,
  createField,
  updateField,
} from "../actions/index";
import PatternDetail from "../components/PatternDetail";
import { StringToRegex } from "../utils/regex";

const FieldDetail = (props) => {
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [description, setDescription] = useState("");
  const [pattern, setPattern] = useState("");
  const [regexDetail, setRegexDetail] = useState([]);
  const [createMode, setCreateMode] = useState(false);
  const [name, setName] = useState("");
  const { activeField: field } = props;

  useEffect(() => {
    if (field) {
      setName(field.name);
      setLabel(field.label);
      setPlaceholder(field.placeholder);
      setDescription(field.description);
      setPattern(field.pattern);
      setRegexDetail(field.patternDetail);
    }
  }, [field]);

  const handleDelete = (name) => {
    props.deleteField(name);
    props.selectField(null);
  };

  const handleNew = () => {
    setCreateMode(true);
    const newField = {
      name: "new",
      label: "",
      placeholder: "",
      pattern: "",
      description: "",
      patternDetail: [],
    };
    props.selectField(newField);
  };

  const onInsertOrUpdate = (event) => {
    event.preventDefault();

    let regex = "";
    try {
      regex = StringToRegex(pattern);
    } catch (e) {
      alert("Expression régulière non valide");
      return;
    }

    const newField = {
      name,
      label,
      placeholder,
      pattern: regex,
      description,
      patternDetail: regexDetail,
    };
    if (createMode) {
      props.createField(newField);
      setCreateMode(false);
    } else {
      props.updateField(newField);
    }
    props.selectField(null);
  };

  const updateRow = (row, col, value) => {
    const result = [...regexDetail];
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === row) {
        if (col === 1) {
          result[i].pattern = value;
        } else if (col === 2) {
          result[i].message = value;
        } else if (col === 3) {
          result[i].expected = value;
        }
      }
    }
    setRegexDetail(result);
  };

  const addRow = () => {
    const result = [...regexDetail];
    result.push({
      id: regexDetail.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1,
      pattern: "",
      message: "",
      expected: true,
    });
    setRegexDetail(result);
  };

  const deleteRow = (row) => {
    const result = regexDetail.filter((item) => {
      return item.id !== row;
    });
    setRegexDetail(result);
  };

  return (
    <>
      {!field ? (
        <></>
      ) : (
        <div className="detail">
          <form onSubmit={onInsertOrUpdate}>
            {createMode ? (
              <>
                <label htmlFor="name">Nom</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                ></input>
              </>
            ) : (
              <div className="headerParam">
                <h2>Paramétrage de : {field.name}</h2>
                <svg
                  onClick={() => handleNew()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a90e2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="arcs"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 3v5h5M12 18v-6M9 15h6" />
                </svg>

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
            )}

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
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
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

            <PatternDetail
              patternDetail={regexDetail}
              updateRow={updateRow}
              addRow={addRow}
              deleteRow={deleteRow}
            />
            <button className="submitBtn">Valider</button>
            <button
              className="clearBtn"
              onClick={() => props.selectField(null)}
            >
              Annuler
            </button>
          </form>
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
  return bindActionCreators(
    { selectField, deleteField, createField, updateField },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldDetail);
