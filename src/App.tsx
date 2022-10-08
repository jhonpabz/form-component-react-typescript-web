import React from "react";
import "./App.css";
import TextInput from "./components/Forms/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputSchema } from "./library/input-schema/inputSchema";

// interface IFormInput {
//   fullName: string;
// }

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InputSchema),
    defaultValues: {
      fullName: "",
    },
  });

  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   console.log(data);
  // };
  console.log(errors, "errors");

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
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
