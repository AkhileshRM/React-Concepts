import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should test whether header component has login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });

  expect(button).toBeInTheDocument();
});

it("Should test whether cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("🛒 - (0)");

  expect(cart).toBeInTheDocument();
});

// Login and Logout button toggle Test Case
it("Should change login button to logout on clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

const logInButton = screen.getByRole("button", {name: "Login"})
fireEvent.click(logInButton)

const logOutButton = screen.getByRole("button", {name:"Logout"})

expect(logOutButton).toBeInTheDocument()
});


