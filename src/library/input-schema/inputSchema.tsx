import * as yup from "yup";

export const InputSchema = yup
  .object({
    name: yup.string().required("Please enter name"),
    contactNumber: yup
      .number()
      .min(10, "Number is too short")
      .max(11, "Maximum 11 number")
      .required("Please enter contact number"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter email"),
  })
  .required();
