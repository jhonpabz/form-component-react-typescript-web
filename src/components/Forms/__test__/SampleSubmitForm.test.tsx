/* eslint-disable testing-library/prefer-screen-queries */
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormExamples from "../FormExamples/index";

afterEach(() => {
  cleanup();
});

describe("Submit Form Integration Test", () => {
  it("Text Field Rendering", () => {
    render(<FormExamples />);
    const TextFieldElement = screen.getByRole("textbox", { name: "Full Name" });
    expect(TextFieldElement).toBeInTheDocument();
  });

  it("Should display Please enter your full name", async () => {
    render(<FormExamples />);
    const TextFieldElement = screen.getByLabelText("Full Name");
    await userEvent.click(screen.getByText("SUBMIT"));

    expect(
      await screen.findByText("Please enter your full name")
    ).toBeInTheDocument();
  });

  it("Number Field Rendering", () => {
    render(<FormExamples />);
    const NumberFieldElement = screen.getByTestId("contact-test-id");
    expect(NumberFieldElement).toBeInTheDocument();
  });

  it("Displays correct contact number value", async () => {
    const { getByLabelText } = render(<FormExamples />);
    const NumberFieldElement = getByLabelText("Contact Number");

    await userEvent.type(NumberFieldElement, "1111111111");

    expect(NumberFieldElement).toHaveValue(1111111111);
  });

  it("Displays incorrect contact number value", async () => {
    render(<FormExamples />);
    const NumberFieldElement = screen.getByTestId("contact-test-id");

    await userEvent.type(NumberFieldElement, "2222222222");

    expect(NumberFieldElement).not.toHaveValue(1111111111);
  });

  it("Should display Minimum of 10 number", async () => {
    const { getByLabelText, getByText, findByText } = render(<FormExamples />);
    const NumberFieldElement = getByLabelText("Contact Number");

    await userEvent.type(NumberFieldElement, "1212");
    await userEvent.click(getByText("SUBMIT"));

    expect(await findByText("Minimum of 10 number")).toBeInTheDocument();
  });

  it("Should display Maximum of 11 number", async () => {
    const { getByLabelText, getByText, findByText } = render(<FormExamples />);
    const NumberFieldElement = getByLabelText("Contact Number");

    await userEvent.type(NumberFieldElement, "123456789011122121");
    await userEvent.click(getByText("SUBMIT"));

    expect(await findByText("Maximum of 11 number")).toBeInTheDocument();
  });

  it("Should display Invalid email format", async () => {
    render(<FormExamples />);
    const EmailFieldElement = screen.getByLabelText("Email Address");

    await userEvent.type(EmailFieldElement, "zxcv");
    await userEvent.click(screen.getByText("SUBMIT"));

    expect(await screen.findByText("Invalid email format")).toBeInTheDocument();
  });

  it("Should display Gender is required", async () => {
    render(<FormExamples />);
    const SelectElement = screen.getByTestId("select-element");
    await userEvent.click(screen.getByText("SUBMIT"));

    expect(await screen.findByText("Gender is required")).toBeInTheDocument();
  });

  it("Should display Status is required", async () => {
    render(<FormExamples />);
    const RadioElement = screen.getByTestId("radio-element");
    await userEvent.click(screen.getByText("SUBMIT"));
    expect(await screen.findByText("Status is required")).toBeInTheDocument();
  });
});
