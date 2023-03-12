export interface CheckboxInterface {
  name: any;
  // control: Control<FieldValues, any>;
  defaultValue?: string;
  label: string;
  value?: string | null;
  errors: any;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  id?: string;
  labelId?: string;
  selectId?: string;
  options: {
    value: string;
    label: string;
  }[];
  sx?: any;
  register: any;
}
