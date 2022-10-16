import React from "react";
import { Button } from "@mui/material";
import { ButtonComponentInterface } from "./ButtonComponentInterface";

const ButtonComponent: React.FC<ButtonComponentInterface> = ({
  children,
  buttonProps,
  type = "button",
  width = 10,
  disabled = false,
  component = "button",
  color,
  style,
}) => {
  return (
    <Button
      color={color}
      component={component}
      type={type}
      fullWidth
      disabled={disabled}
      variant="contained"
      style={style}
      sx={{
        mt: style ? "" : 2,
        mb: style ? "" : 2,
        mx: style ? "" : 0.5,
        width: width,
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
