import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextFieldInterface } from "./TextFieldInterface";

const TextFieldComponent: React.FC<TextFieldInterface> = ({
  control,
  name,
  required,
  label,
  errors,
  disabled = false,
  autoFocus,
  type,
  inputStyleTextField = "MATERIAL UI",
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field: { onChange, value } }) =>
          inputStyleTextField === "MATERIAL UI" ? (
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
              sx={{ mb: 1, mt: 1 }}
            />
          ) : (
            <>
              <p>{label}</p>
              <input type="text" />
            </>
          )
        }
      />
    </>
  );
};

export default TextFieldComponent;
