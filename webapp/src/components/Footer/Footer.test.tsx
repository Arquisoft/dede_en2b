import {fireEvent, render, screen} from "@testing-library/react";
import App from "../../App"

test('Check that everything in the footer is rendered', async () => {
    render(<App/>);
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("SOLID")).toBeInTheDocument();
});

test('Check that About Us link works at takes the user to About us page', async () => {
    render(<App/>);
    let aboutUs = screen.getByTestId("aboutUsLink");
    fireEvent.click(aboutUs);
    expect(screen.getByText("Developer team")).toBeInTheDocument();
});