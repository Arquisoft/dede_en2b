import Footer from "./Footer";
import { render, screen} from "@testing-library/react";
import Cart from "./Cart";


test('Empty cart', async () => {
    render(<Cart/>);

    expect(screen.getByText("Shopping cart is empty")).toBeInTheDocument();

});