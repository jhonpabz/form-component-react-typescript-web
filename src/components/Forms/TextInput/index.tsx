import React from "react";
import { TextField, Alert } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputProps {
  control: any;
  name: string;
  required: boolean;
  label: string;
  errors: any;
  disabled: boolean;
  autoFocus: boolean;
}

// interface Props {
//   fullName?: string;
//   isInvalid?: boolean;
//   //num : number;
//   // fn: (bob: string) => string;
//   inputProps?: InputProps; // ? = make props optional
//   handleChange: React.ChangeEventHandler<HTMLInputElement>;
// }

const TextInput: React.FC<InputProps> = ({
  control,
  name,
  required,
  label,
  errors,
  disabled = false,
  autoFocus,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field: { onChange, value } }) => (
          <TextField
            variant="standard"
            label={label}
            // defaultValue={text}
            // error={isInvalid}
            // helperText={isInvalid ? "Incorrect Entry" : ""}
            onChange={onChange}
            // helperText={errors}
            disabled={disabled}
            autoFocus={autoFocus}
            error={errors[name]?.message}
            helperText={errors[name]?.message}
          />
        )}
      />
      {/* {errors[name] && <Alert severity="error">{errors[name]?.message}</Alert>} */}
    </>
  );
};

export default TextInput;
