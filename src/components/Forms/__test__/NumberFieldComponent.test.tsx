/* eslint-disable testing-library/prefer-screen-queries */
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormExamples from "../FormExamples/index";

afterEach(() => {
  cleanup();
});

describe("Contact Number Field Test", () => {
  test("Number Field Rendering", () => {
    render(<FormExamples />);
    const NumberFieldElement = screen.getByTestId("contact-test-id");
    expect(NumberFieldElement).toBeInTheDocument();
  });

  test("Displays correct contact number value", async () => {
    const { getByLabelText } = render(<FormExamples />);
    const NumberFieldElement = getByLabelText("Contact Number");

    await userEvent.type(NumberFieldElement, "1111111111");

    expect(NumberFieldElement).toHaveValue(1111111111);
  });

  test("Displays incorrect contact number value", async () => {
    render(<FormExamples />);
    const NumberFieldElement = screen.getByTestId("contact-test-id");

    await userEvent.type(NumberFieldElement, "2222222222");

    expect(NumberFieldElement).not.toHaveValue(1111111111);
  });

  test("Should display Minimum of 10 number", async () => {
    const { getByLabelText, getByText, findByText } = render(<FormExamples />);
    const NumberFieldElement = getByLabelText("Contact Number");

    await userEvent.type(NumberFieldElement, "1212");
    await userEvent.click(getByText("SUBMIT"));

    expect(await findByText("Minimum of 10 number")).toBeInTheDocument();
  });

  test("Should display Maximum of 11 number", async () => {
    const { getByLabelText, getByText, findByText } = render(<FormExamples />);
    const NumberFieldElement = getByLabelText("Contact Number");

    await userEvent.type(NumberFieldElement, "123456789011122121");
    await userEvent.click(getByText("SUBMIT"));

    expect(await findByText("Maximum of 11 number")).toBeInTheDocument();
  });
});
