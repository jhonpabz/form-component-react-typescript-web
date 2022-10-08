import React from "react";
import "./App.css";
import TextInput from "./components/Forms/TextInput";

const App = () => {
  return (
    <div className="App">
      <TextInput
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
};

export default App;
