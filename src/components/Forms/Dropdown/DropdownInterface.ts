import { ReactNode } from "react";
import { Control } from "react-hook-form/dist/types/form";

export interface DropdownInterface {
  name: any;
  control: Control<
    { fullName: string; contactNumber: string; email: string },
    any
  >;
  defaultValue?: string;
  children: React.ReactNode;
  onChange: (event: any) => void;
  label: string;
  value: number | null;
  errors: any;
  variant?: "standard" | "filled" | "outlined" | undefined;
}
