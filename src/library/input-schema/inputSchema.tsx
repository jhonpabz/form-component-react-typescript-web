import * as yup from "yup";

export const InputSchema = yup
  .object({
    fullName: yup.string().required("Please enter your full name"),
    contactNumber: yup
      .string()
      .min(10, "Minimum of 10 number")
      .max(11, "Maximum of 11 number")
      .required("Please enter contact number"),
  })
  .required();
