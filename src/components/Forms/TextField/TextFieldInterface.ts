export interface TextFieldInterface {
  control: any;
  name: string;
  required: boolean;
  label: string;
  errors: any;
  disabled: boolean;
  autoFocus: boolean;
  type?: string;
  inputStyleTextField?: string;
  style?: React.CSSProperties | any;
}
