import React from "react";
import "../App.css";
import FieldList from "../containers/FieldList";
import FieldDetail from "../containers/FieldDetail";

function App() {
  return (
    <div className="App">
      <FieldList />
      <FieldDetail />
    </div>
  );
}

export default App;
