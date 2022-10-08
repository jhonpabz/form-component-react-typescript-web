import React, { useRef } from "react";
import { TextField } from "@mui/material";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  isInvalid?: boolean;
  //num : number;
  // fn: (bob: string) => string;
  person?: Person; // ? = make props optional
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({ text, isInvalid, handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <TextField
        ref={inputRef}
        variant="standard"
        label="Text Field"
        defaultValue={text}
        error={isInvalid}
        helperText={isInvalid ? "Incorrect Entry" : ""}
        onChange={handleChange}
      />
    </>
  );
};

export default TextInput;
