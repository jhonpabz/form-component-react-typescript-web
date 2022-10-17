export interface RadioButtonInterface {
  radioButtonOptions: {
    value: string;
    label: string;
  }[];
  name: string;
  control: any;
  style?: React.CSSProperties;
  label?: string;
  id?: string;
  ariaLabelledby?: string;
  errors: any;
}
