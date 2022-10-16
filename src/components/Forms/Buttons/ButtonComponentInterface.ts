export interface ButtonComponentInterface {
  children: React.ReactNode;
  buttonProps?: any;
  type: string;
  width: string | number;
  disabled?: boolean;
  component?: string;
  color: string;
  style?: React.CSSProperties;
}
