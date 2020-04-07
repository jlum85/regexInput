import React from "react";
import { connect } from "react-redux";

const FieldDetail = (props) => {
  const { activeField: field } = props;

  console.log(field);
  return (
    <>
      {!field ? (
        <></>
      ) : (
        <div className="detail">
          <h2>Détail de : {field.name}</h2>
          <form>
            <label htmlFor="label">Titre</label>
            <input
              name="label"
              type="text"
              value={field.label}
              // onChange={onChange}
              autoComplete="off"
            ></input>

            <label htmlFor="label">Expression régulière</label>
            <input
              name="pattern"
              type="text"
              value={String(field.pattern)}
              autoComplete="off"
            ></input>

            <label htmlFor="label">Description</label>
            <input
              name="pattern"
              type="text"
              value={field.description}
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
