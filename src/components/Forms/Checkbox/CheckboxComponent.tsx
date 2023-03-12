import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { CheckboxInterface } from './CheckboxInterface';

import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from 'react';

const CheckboxComponent: React.FC<CheckboxInterface> = ({
  options,
  sx,
  errors,
  name,
  register,
}) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          {options.map(
            (
              option: {
                value: unknown;
                label:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={<Checkbox {...register(name)} value={option.value} />}
                label={option.label}
                labelPlacement="end"
                sx={{ ...sx }}
              />
            )
          )}
        </FormGroup>
      </FormControl>
      <FormHelperText style={{ color: '#d32f2f' }}>
        {errors[name]?.message}
      </FormHelperText>
    </>
  );
};

export default CheckboxComponent;
