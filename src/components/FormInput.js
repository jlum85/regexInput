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
  patternDetail
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const onClickDetail = () => {
    setShowDetail(!showDetail);
  };

  const validateDetail = patternList => {
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
      <label htmlFor={name}>{label} :</label>
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
