import React from "react";

const PatternDetail = (props) => {
  const getItems = () => {
    if (props.patternDetail) {
      return props.patternDetail.map((item, index) => {
        return (
          <div className="row" key={index}>
            <input
              className="col1"
              type="text"
              name="codeD"
              value={item.pattern}
              onChange={(event) => {
                const value = event.target.value;
                props.updateRow(item.id, 1, value);
              }}
            />
            <input
              className="col2"
              type="text"
              name="libD"
              value={item.message}
              onChange={(event) => {
                const value = event.target.value;
                props.updateRow(item.id, 2, value);
              }}
            />
            <input
              className="col3"
              type="text"
              name="codeD"
              value={item.expected}
              onChange={(event) => {
                const value = event.target.value;
                props.updateRow(item.id, 3, value);
              }}
            />

            <div className="tdW50">
              <svg
                onClick={() => props.deleteRow(item.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <h3>Détails de l'expression régulière</h3>

      <div className="bodyLot">
        <div className="row">
          <div className="col1">Pattern</div>
          <div className="col2">Description</div>
          <div className="col3">Valeur</div>
          <div className="thW50">
            <svg
              onClick={() => props.addRow()}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
        </div>
        {getItems()}
      </div>
    </>
  );
};

export default PatternDetail;
