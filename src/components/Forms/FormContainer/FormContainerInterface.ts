import { FormEventHandler } from "react";
import { AnyObjectSchema } from "yup";
import Lazy from "yup/lib/Lazy";

interface FormValues {
  fullName: string;
  contactNumber: number | null;
  email: string;
}

export interface FormContainerInterface {
  children: React.ReactNode;
  defaultValues: FormValues;
  schema: Lazy<any, unknown> | AnyObjectSchema;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
