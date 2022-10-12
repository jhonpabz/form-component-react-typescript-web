import React from "react";
import { Select, InputLabel, FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import { DropdownInterface } from "./DropdownInterface";

const DropdownComponent: React.FC<DropdownInterface> = ({
  name,
  control,
  defaultValue,
  children,
  label,
  errors,
  value,
  variant = "standard",
}) => {
  return (
    <>
      <FormControl
        variant={variant}
        fullWidth
        error={errors[name]?.message ? true : false}
      >
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value } }) => (
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select"
              label={label}
              onChange={onChange}
              value={value}
            >
              {children}
            </Select>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default DropdownComponent;
