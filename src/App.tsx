import React, { useState } from "react";
import "./App.css";
import TextFieldComponent from "./components/Forms/TextField/TextFieldComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputSchema } from "./library/input-schema/inputSchema";
import ButtonComponent from "./components/Forms/Buttons/ButtonComponent";
import { Box } from "@mui/material";
import DropdownComponent from "./components/Forms/Dropdown/DropdownComponent";
import FormContainer from "./components/Forms/FormContainer/FormContainer";

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InputSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
    },
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
            <TextFieldComponent
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

            <ButtonComponent type="submit" width={"100%"} color="primary">
              SUBMIT
            </ButtonComponent>
          </FormContainer>
        </Box>
      </Box>
    </>
  );
};

export default App;
