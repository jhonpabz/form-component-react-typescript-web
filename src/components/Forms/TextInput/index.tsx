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
  type?: string;
}

const TextInput: React.FC<InputProps> = ({
  control,
  name,
  required,
  label,
  errors,
  disabled = false,
  autoFocus,
  type,
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
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
            error={errors[name]?.message ? true : false}
            helperText={errors[name]?.message}
            fullWidth
            type={type}
          />
        )}
      />
    </>
  );
};

export default TextInput;
