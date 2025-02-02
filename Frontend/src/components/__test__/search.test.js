import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );
  // // const cardsBeforeSearch = screen.getAllByTestId("resCard");
  // // expect(cardsBeforeSearch.length).toBe(20);

  // const searchBtn = screen.getByRole("button", { name: "search" });
  // const searchInput = screen.getByTestId("searchInput");

  // // Simulate user typing and clicking search
  // fireEvent.change(searchInput, { target: { value: "pizza" } });
  // fireEvent.click(searchBtn);

  // // Wait for restaurant cards to appear
  // const cards = screen.getAllByTestId("resCard");

  // console.log(cards.length);

  // // Ensure 3 cards are rendered
  // expect(cards.length).toBe(4);
});
