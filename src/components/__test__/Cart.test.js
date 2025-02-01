import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { screen } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_NAME);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () => render(<RestaurantMenu />));

  const accordionHeader = screen.getByText("Recommended")
});
