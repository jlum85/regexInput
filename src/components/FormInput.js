import React, { useState } from "react";
import BtnDetailRegex from "./BtnDetailRegex";
import ItemDetail from "./ItemDetail";

const FormInput = ({
  name,
  label,
  type,
  value,
  placeholder,
  valid,
  onChange,
  errorMsg,
  patternDetail,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const onClickDetail = () => {
    setShowDetail(!showDetail);
  };

  const validateDetail = (patternList) => {
    if (!patternList || patternList.length === 0 || !showDetail) {
      return [];
    }

    return patternList.map((item, index) => {
      const regex = item.pattern;
      let passed = false;
      if (value) {
        // on a des conditions négatives /[^a-z\d]/i pour vérifier qu'il n'y a que des caractères alphanumériques
        passed = regex.test(value) === item.expected;
      }
      return <ItemDetail key={index} passed={passed} message={item.message} />;
    });
  };

  return (
    <>
      <div className="divLabel">
        <label htmlFor={name}>{label}</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>
      <div className="inputFlex">
        <div>
          <input
            className={valid}
            name={name}
            id={name}
            type={type ? type : "text"}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
        {patternDetail && patternDetail.length > 0 ? (
          <BtnDetailRegex onClickDetail={onClickDetail} />
        ) : (
          <></>
        )}
      </div>
      {valid === "invalid" ? <div className="errorMsg">{errorMsg}</div> : <></>}
      {showDetail ? (
        <div className="details"> {validateDetail(patternDetail)}</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormInput;
