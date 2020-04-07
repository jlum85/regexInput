import React from "react";

const PatternDetail = (props) => {
  const detail = props.patternDetail;

  return (
    <>
      <h3>Détails </h3>
      {detail &&
        detail.map((item, index) => {
          return (
            <div key={index}>
              <h4>pattern: {String(item.pattern)}</h4>
              <h4>message: {item.message}</h4>
              <h4>expected: {String(item.expected)}</h4>
            </div>
          );
        })}
    </>
  );
};

export default PatternDetail;

// var isValid = true;
// try {
//     new RegExp("the_regex_to_test_goes_here");
// } catch(e) {
//     isValid = false;
// }

// if(!isValid) alert("Invalid regular expression");
