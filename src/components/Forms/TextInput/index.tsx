import React from "react";
import { TextField } from "@mui/material";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  isInvalid: boolean;
  //num : number;
  // fn: (bob: string) => string;
  person?: Person; // ? = make props optional
}

const TextInput: React.FC<Props> = ({ isInvalid, text }) => {
  return (
    <div>
      <TextField
        variant="standard"
        label="Text Field"
        defaultValue={text}
        error={isInvalid}
        helperText={isInvalid ? "Incorrect Entry" : ""}
      />
    </div>
  );
};

export default TextInput;
