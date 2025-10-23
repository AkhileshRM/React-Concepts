import Main from "../../components/Main";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should search Restaurant List for pizz input", async () => {
  jest.useFakeTimers();
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );

  jest.runAllTimers();

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchButton = await screen.findByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizz" } });
  fireEvent.click(searchButton);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});


it("Should filter Top rated restaurant", async () => {
jest.useFakeTimers();
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );

  jest.runAllTimers();

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  // const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"})

  // fireEvent.click(topRatedButton)

  // const cardsAfterFilter = screen.findAllByTestId("resCard")

  // expect(cardsAfterFilter.length).toBe(2)

})