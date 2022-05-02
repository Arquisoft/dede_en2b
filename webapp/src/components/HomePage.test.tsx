import HomePage from "./HomePage";
import { render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Slider from "./Homepage/Slider";
import Categories from "./Homepage/Categories";


test('Check that everything is properly rendered', async () => {
    render(<BrowserRouter><HomePage/></BrowserRouter>);
    expect(screen.getByText("FRESH PRODUCTS")).toBeInTheDocument();
    expect(screen.getByText("STRAIGHT FROM THE FARM")).toBeInTheDocument();
    expect(screen.getByText("OUR PRODUCTS")).toBeInTheDocument();
    // expect(screen.getByTestId("shopNowButton")).toBeVisible();
    expect(screen.getByTestId("fruitFilter")).toBeInTheDocument();
    expect(screen.getByTestId("meatFilter")).toBeInTheDocument();
    expect(screen.getByTestId("fishFilter")).toBeInTheDocument();
    expect(screen.getByTestId("vegetablesFilter")).toBeInTheDocument();
});