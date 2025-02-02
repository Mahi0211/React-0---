import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("Contact Us page test cases", () => {
    test("Should Load Contact us Component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading")

        // Assertion
        expect(heading).toBeInTheDocument()
    })

    it("Should Load Button inside the Component", () => {
        render(<Contact />);

        const button = screen.getByRole("button")

        // Assertion
        expect(button).toBeInTheDocument()
    })

    it("Should Load input boxes inside the Component", () => {
        render(<Contact />);

        const inputBox = screen.getAllByRole("textbox");

        // Querying
        console.log(inputBox.length)

        // Assertion
        expect(inputBox.length).toBe(2)
    })
})

