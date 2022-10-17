import React from "react";
import {
  Box,
  FormHelperText,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { RadioButtonInterface } from "./RadioButtonInterface";
import { Controller } from "react-hook-form";

const RadioButtonComponent: React.FC<RadioButtonInterface> = ({
  radioButtonOptions,
  name,
  control,
  style,
  label,
  id,
  ariaLabelledby,
  errors,
}) => {
  return (
    <Box style={style} sx={{ mt: style ? "" : 3 }}>
      <FormControl error={errors[name]?.message ? true : false}>
        <FormLabel id={id}>{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <RadioGroup row aria-labelledby={ariaLabelledby} {...field}>
              {radioButtonOptions.map((radioButtonOption) => (
                <FormControlLabel
                  value={radioButtonOption.value}
                  control={<Radio />}
                  label={radioButtonOption.label}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
      <FormHelperText style={{ color: "#d32f2f" }}>
        {errors[name]?.message}
      </FormHelperText>
    </Box>
  );
};

export default RadioButtonComponent;
