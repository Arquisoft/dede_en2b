import AboutUs from "./AboutUs";
import { render, screen} from "@testing-library/react";


test('Check that everything is properly rendered', async () => {
    render(<AboutUs/>);
    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(screen.getByText("Developer team")).toBeInTheDocument();
    expect(screen.getByText("Diego Martín Fernández")).toBeInTheDocument();
    expect(screen.getByText("Laura Pernía Blanco")).toBeInTheDocument();
    expect(screen.getByText("Stelian Adrian Stanci")).toBeInTheDocument();
});