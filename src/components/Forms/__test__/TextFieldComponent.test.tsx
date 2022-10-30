import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import FormExamples from "../FormExamples";

afterEach(() => {
  cleanup();
});

describe("TextField Component", () => {
  render(<FormExamples />);

  const TextFieldElement = screen.getByRole("textbox", { name: "Full Name" });

  test("Text Field Rendering", () => {
    expect(TextFieldElement).toBeInTheDocument();
  });

  fireEvent.change(TextFieldElement, { target: { value: "Test Changed" } });

  test("Text Field Should Update", () => {
    expect(TextFieldElement).toHaveValue("Test Changed");
  });
});
