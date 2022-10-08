import React from "react";
import "./App.css";
import TextInput from "./components/Forms/TextInput";

const App = () => {
  return (
    <div className="App">
      <TextInput text="hello" isInvalid={false} />
    </div>
  );
};

export default App;
