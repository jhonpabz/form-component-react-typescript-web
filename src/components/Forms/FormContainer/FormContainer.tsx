import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainerInterface } from "./FormContainerInterface";

const FormContainer = ({
  children,
  schema,
  defaultValues,
  onSubmit,
}: FormContainerInterface) => {
  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  return (
    <>
      <form onSubmit={onSubmit}>{children}</form>
    </>
  );
};

export default FormContainer;
