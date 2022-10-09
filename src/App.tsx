import React from "react";
import "./App.css";
import TextInput from "./components/Forms/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputSchema } from "./library/input-schema/inputSchema";
import ButtonComponent from "./components/Buttons";

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

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TextInput
          autoFocus={true}
          control={control}
          disabled={false}
          errors={errors}
          label="Full Name"
          name="fullName"
          required={true}
        />
        <TextInput
          autoFocus={false}
          control={control}
          disabled={false}
          errors={errors}
          label="Contact Number"
          name="contactNumber"
          required={true}
          type="number"
        />
        <TextInput
          autoFocus={false}
          control={control}
          disabled={false}
          errors={errors}
          label="Email Address"
          name="email"
          required={true}
        />
        <ButtonComponent type="submit" width={"100%"} color="primary">
          SUBMIT
        </ButtonComponent>
      </form>
    </div>
  );
};

export default App;
