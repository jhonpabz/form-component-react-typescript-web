import React, { useState, useCallback } from 'react';
import TextFieldComponent from '../TextField/TextFieldComponent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonComponent from '../Buttons/ButtonComponent';
import { Box, Typography } from '@mui/material';
import DropdownComponent from '../Dropdown/DropdownComponent';
import FormContainer from '../FormContainer/FormContainer';
import RadioButtonComponent from '../RadioButton/RadioButtonComponent';
import { InputSchema } from './InputSchema';
import NumberFieldComponent from '../NumberField/NumberFieldComponent';
import Paper from '@mui/material/Paper';
import InputStyleComponent from '../InputStyle/InputStyleComponent';
import EmailFieldComponent from '../EmailField/EmailFieldComponent';
import CheckboxComponent from '../Checkbox/CheckboxComponent';

const FormExamples = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InputSchema),
  });

  const genderOptions: { value: string; label: string }[] = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ];

  const statusOptions: { value: string; label: string }[] = [
    {
      value: 'Single',
      label: 'Single',
    },
    {
      value: 'Married',
      label: 'Married',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ];

  const checkboxOptions: { value: string; label: string }[] = [
    {
      value: 'Sample 1',
      label: 'Sample 1',
    },
    {
      value: 'Sample 2',
      label: 'Sample 2',
    },
    {
      value: 'Sample 3',
      label: 'Sample 3',
    },
  ];

  const cssFramework: string[] = ['MATERIAL UI', 'PLAIN'];

  const [inputStyleTextField, setInputStyleTextField] = useState('MATERIAL UI');
  const [inputStyleNumberField, setInputStyleNumberField] =
    useState('MATERIAL UI');

  const textFieldWrapper = useCallback(
    (val: React.SetStateAction<string>) => {
      setInputStyleTextField(val);
    },
    [setInputStyleTextField]
  );

  const numberFieldWrapper = useCallback(
    (val: React.SetStateAction<string>) => {
      setInputStyleNumberField(val);
    },
    [setInputStyleNumberField]
  );

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#f9fafc' }}
      >
        <Paper
          sx={{
            minWidth: 555,
            mt: 14,
          }}
          elevation={1}
        >
          <Box sx={{ textAlign: 'center', mt: 7 }}>
            <Typography
              variant="h4"
              gutterBottom
              display="block"
              component="div"
            >
              Register
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Sample Form Sample Text Here
            </Typography>
          </Box>
          <Box sx={{ p: 5 }}>
            <FormContainer
              defaultValues={{
                fullName: '',
                contactNumber: null,
                email: '',
              }}
              schema={InputSchema}
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <TextFieldComponent
                autoFocus={true}
                control={control}
                disabled={false}
                errors={errors}
                label="Full Name"
                name="fullName"
                required={true}
                inputStyleTextField={inputStyleTextField}
              />
              <InputStyleComponent
                cssFramework={cssFramework}
                parentState={inputStyleTextField}
                parentStateSetter={textFieldWrapper}
              />

              <NumberFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                errors={errors}
                label="Contact Number"
                name="contactNumber"
                required={true}
                inputStyleNumberField={inputStyleNumberField}
              />
              <InputStyleComponent
                cssFramework={cssFramework}
                parentState={inputStyleNumberField}
                parentStateSetter={numberFieldWrapper}
              />

              <EmailFieldComponent
                autoFocus={false}
                control={control}
                disabled={false}
                name="email"
                required={true}
                type="email"
              />
              <div data-testid="select-element">
                <DropdownComponent
                  name="gender"
                  label="Gender"
                  control={control}
                  errors={errors}
                  options={genderOptions}
                />
              </div>
              <div data-testid="radio-element">
                <RadioButtonComponent
                  radioButtonOptions={statusOptions}
                  name="status"
                  label="Status"
                  control={control}
                  errors={errors}
                />
              </div>

              <CheckboxComponent
                name="sampleCheckbox"
                register={register}
                errors={errors}
                label={'Sample Checkbox'}
                options={checkboxOptions}
                sx={{ mt: 3 }}
              />
              <ButtonComponent type="submit" width={'100%'} color="primary">
                SUBMIT
              </ButtonComponent>
            </FormContainer>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default FormExamples;
