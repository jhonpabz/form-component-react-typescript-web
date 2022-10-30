import React, { useState } from "react";
import TextFieldComponent from "../TextField/TextFieldComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonComponent from "../Buttons/ButtonComponent";
import { Box } from "@mui/material";
import DropdownComponent from "../Dropdown/DropdownComponent";
import FormContainer from "../FormContainer/FormContainer";
import RadioButtonComponent from "../RadioButton/RadioButtonComponent";
import { InputSchema } from "./InputSchema";

const FormExamples = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InputSchema),
  });

  const genderOptions: { value: string; label: string }[] = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const statusOptions: { value: string; label: string }[] = [
    {
      value: "Single",
      label: "Single",
    },
    {
      value: "Married",
      label: "Married",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box sx={{ width: { sx: "100%", md: "75%", lg: "50%" }, p: { xs: 5 } }}>
          <FormContainer
            defaultValues={{
              fullName: "",
              contactNumber: null,
              email: "",
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
            />
            <div data-testid="custom-element" >
              <h1>Testing</h1>
              </div>
            {/* <TextFieldComponent
              autoFocus={false}
              control={control}
              disabled={false}
              errors={errors}
              label="Contact Number"
              name="contactNumber"
              required={true}
              type="number"
            />
            <TextFieldComponent
              autoFocus={false}
              control={control}
              disabled={false}
              errors={errors}
              label="Email Address"
              name="email"
              required={true}
            />

            <DropdownComponent
              name="gender"
              label="Gender"
              control={control}
              errors={errors}
              options={genderOptions}
            />

            <RadioButtonComponent
              radioButtonOptions={statusOptions}
              name="status"
              label="Status"
              control={control}
              errors={errors}
            /> */}

            <ButtonComponent type="submit" width={"100%"} color="primary">
              SUBMIT
            </ButtonComponent>
          </FormContainer>
        </Box>
      </Box>
    </>
  );
};

export default FormExamples;
