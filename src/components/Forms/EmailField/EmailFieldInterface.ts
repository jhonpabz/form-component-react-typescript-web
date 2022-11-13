export interface EmailFieldInterface {
  control?: any;
  name: string;
  required: boolean;
  label?: string;
  disabled: boolean;
  autoFocus: boolean;
  type?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  style?: React.CSSProperties;
}
