import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("Should render RestaurantCard component correctly with props", () => {
  render(<RestaurantCard resName={MOCK_DATA.name} />);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard Component with Promoted label", () => {
 const PromotedRestaurantCard = withPromotedLabel(RestaurantCard)

 render(<PromotedRestaurantCard />)

  const promotedLabel = screen.getByText("Promoted")
  expect(promotedLabel).toBeInTheDocument()
})