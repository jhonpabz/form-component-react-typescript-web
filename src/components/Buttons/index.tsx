import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  buttonProps?: any;
  type: string;
  width: string | number;
  disabled?: boolean;
  component?: string;
  color: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  buttonProps,
  type = "button",
  width = 10,
  disabled = false,
  component = "button",
  color,
}) => {
  return (
    <Button
      color={color}
      component={component}
      type={type}
      fullWidth
      disabled={disabled}
      variant="contained"
      sx={{ mt: 2, mb: 2, mx: 0.5, width: width }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
