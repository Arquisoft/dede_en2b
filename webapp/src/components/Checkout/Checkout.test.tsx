import Checkout from "./Checkout";
import { render, screen} from "@testing-library/react";
import AboutUs from "../About/AboutUs";


test('Check that everything is properly rendered', async () => {
    render(<AboutUs/>);

});