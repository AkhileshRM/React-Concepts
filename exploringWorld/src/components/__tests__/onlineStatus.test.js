import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should check the online Status", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const onlineStatus = screen.getByText("Online Status: ✅");
  expect(onlineStatus).toBeInTheDocument();

  fireEvent(window, new Event("offline"));

  const offlineStatus = screen.getByText("Online Status: 🔴");
  expect(offlineStatus).toBeInTheDocument();

  fireEvent(window, new Event("online"));
  expect(onlineStatus).toBeInTheDocument();
});
