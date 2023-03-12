import * as yup from 'yup';

export const InputSchema = yup
  .object({
    fullName: yup.string().required('Please enter your full name'),
    contactNumber: yup
      .string()
      .required('Please enter contact number')
      .min(10, 'Minimum of 10 number')
      .max(11, 'Maximum of 11 number'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Please enter email'),
    gender: yup.string().required('Gender is required'),
    status: yup.string().required('Status is required'),
    sampleCheckbox: yup
      .array()
      .required('Please select at least one in checkbox.')
      .nullable(),
  })
  .required();
