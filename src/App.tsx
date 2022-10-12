import React, { useState } from "react";
import "./App.css";
import TextFieldComponent from "./components/Forms/TextField/TextFieldComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputSchema } from "./library/input-schema/inputSchema";
import ButtonComponent from "./components/Buttons";
import { Box, MenuItem } from "@mui/material";
import DropdownComponent from "./components/Forms/Dropdown/DropdownComponent";

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

  const [age, setAge] = useState<number | null>(null);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box sx={{ width: { sx: "100%", md: "75%", lg: "50%" }, p: { xs: 5 } }}>
          <form
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
              name="age"
              label="Age"
              control={control}
              onChange={handleChange}
              value={age}
              errors={errors}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </DropdownComponent>
            <ButtonComponent type="submit" width={"100%"} color="primary">
              SUBMIT
            </ButtonComponent>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default App;
