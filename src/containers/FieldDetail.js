import React from "react";
import { connect } from "react-redux";

const FieldDetail = (props) => {
  const { activeField: field } = props;

  return (
    <>
      {!field ? (
        <></>
      ) : (
        <div className="detail">
          <h3>Détail de : {field.name}</h3>
          <h3>label: {field.label}</h3>
          <h3>pattern: {String(field.pattern)}</h3>
          <h3>description: {field.description}</h3>
          <h3>patternDetail: </h3>
          {field.patternDetail.map((item, index) => {
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
