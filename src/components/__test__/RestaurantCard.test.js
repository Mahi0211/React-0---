import { render, screen } from "@testing-library/react"
import RestaurantCard, { withDiscount } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../redux/appStore"

it("Should render RestaurantCard component with props data", () => {
    render(
        <Provider store={appStore}>
            <RestaurantCard resData={MOCK_DATA} />
        </Provider>
    )

    const resName = screen.getByText("Chinese Wok")

    expect(resName).toBeInTheDocument()
})

it("Should render restaurant component with discount", () => {
    // HW - test HOC : withDiscount

    const RestaurantWithDiscount = withDiscount(RestaurantCard)

    render(
        <Provider store={appStore}>
            <RestaurantWithDiscount resData={MOCK_DATA} />
        </Provider>
    )

    const resWithDis = screen.getByText("ITEMS AT ₹149")

    expect(resWithDis).toBeInTheDocument()
})