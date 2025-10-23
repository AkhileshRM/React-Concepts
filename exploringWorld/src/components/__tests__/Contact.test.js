import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load Contact US Component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should be a button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  const buttonName = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
  expect(buttonName).toBeInTheDocument();
});

test("Should have 2 input fields", () => {
  render(<Contact />);

  // Querying
  const inputTextBoxes = screen.getAllByRole("textbox");

  // Assertion
  expect(inputTextBoxes.length).toBe(2);
});

//To group multiple test cases use describe()

// describe("Contact US Grouped Test cases", () => {
//   test("Should be a button", () => {
//     render(<Contact />);
//     const button = screen.getByRole("button");
//     const buttonName = screen.getByText("Submit");
//     expect(button).toBeInTheDocument();
//     expect(buttonName).toBeInTheDocument();
//   });

//   test("Should have 2 input fields", () => {
//     render(<Contact />);

//     // Querying
//     const inputTextBoxes = screen.getAllByRole("textbox");

//     // Assertion
//     expect(inputTextBoxes.length).toBe(2);
//   });
// });
