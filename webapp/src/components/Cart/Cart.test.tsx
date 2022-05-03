import { render, screen} from "@testing-library/react";
import Cart from "./Cart";

test('Check that message appears when cart is empty', async () => {
    render(<Cart/>);
    expect(screen.getByText("Shopping cart is empty")).toBeInTheDocument();
});