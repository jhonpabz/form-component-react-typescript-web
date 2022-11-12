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
  autoFocus = false,
  type = "number",
  variant = "standard",
  style,
  inputStyleNumberField = "MATERIAL UI",
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field: { onChange, value } }) =>
          inputStyleNumberField === "MATERIAL UI" ? (
            <TextField
              data-testid="contact-test-id" // ID for testing (you can remove this)
              variant={variant}
              label={label}
              value={value || ""}
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
          ) : (
            <div style={{ marginBottom: "7px" }}>
              <label
                style={errors[name]?.message && { color: "#d32f2f" }}
                htmlFor={name}
              >
                {label}:{" "}
              </label>
              <input
                style={
                  style
                    ? style
                    : {
                        width: "98%",
                        paddingTop: "7px",
                        paddingBottom: "7px",
                      }
                }
                type="number"
                name={name}
                onChange={onChange}
                value={value || ""}
              />
              <span
                style={{
                  color: "#d32f2f",
                  fontSize: "12px",
                }}
              >
                {errors[name]?.message ? errors[name]?.message : null}
              </span>
            </div>
          )
        }
      />
    </>
  );
};

export default NumberFieldComponent;
