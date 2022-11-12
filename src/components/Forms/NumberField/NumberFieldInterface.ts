import { HTMLInputTypeAttribute } from "react";

export interface NumberFieldInterface {
  control?: any;
  name: string;
  required: boolean;
  label: string;
  errors: any;
  disabled: boolean;
  autoFocus: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  variant?: "standard" | "filled" | "outlined" | undefined;
  style?: React.CSSProperties;
  inputStyleNumberField?: string;
}
