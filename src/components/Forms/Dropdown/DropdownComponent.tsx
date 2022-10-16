import React from "react";
import {
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { DropdownInterface } from "./DropdownInterface";

const DropdownComponent: React.FC<DropdownInterface> = ({
  name,
  control,
  defaultValue,
  label,
  errors,
  variant = "standard",
  id,
  labelId,
  selectId,
  options,
}) => {
  return (
    <>
      <FormControl
        variant={variant}
        fullWidth
        error={errors[name]?.message ? true : false}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value } }) => (
            <Select
              labelId={labelId}
              id={selectId}
              label={label}
              onChange={onChange}
              value={value}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default DropdownComponent;
