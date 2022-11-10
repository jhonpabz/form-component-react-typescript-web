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
  style,
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
                type="text"
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

export default TextFieldComponent;
