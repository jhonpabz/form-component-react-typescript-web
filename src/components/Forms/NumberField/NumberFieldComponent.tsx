import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { NumberFieldInterface } from "./NumberFieldInterface";

const NumberFieldComponent: React.FC<NumberFieldInterface> = ({
  control,
  name,
  required,
  label,
  errors,
  disabled = false,
  autoFocus,
  type = "number",
  variant = "standard",
  style,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field: { onChange, value } }) => (
          <TextField
            data-testid="contact-test-id" // ID for testing (you can remove this)
            variant={variant}
            label={label}
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
            error={errors[name]?.message ? true : false}
            helperText={errors[name]?.message}
            fullWidth
            type={type}
            style={style}
            sx={{ mb: style ? "" : 1, mt: style ? "" : 1 }}
          />
        )}
      />
    </>
  );
};

export default NumberFieldComponent;
