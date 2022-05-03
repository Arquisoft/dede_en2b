import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test('check that the logo DeDe is rendered', async () => {
    render(<App/>);
    const logo = screen.getByText("DeDe");
    expect(logo).toBeInTheDocument();
});

test('check that the login button is rendered', async () => {
   render(<App/>);
   const login = screen.getByText("Login");
    expect(login).toBeInTheDocument();
});

test('check that the orders button does not appear when not in session', async () => {
    render(<App/>);
    const orders = screen.queryByText("Orders");
    expect(orders).toBeNull();
});

test('check that sidebar is properly rendered', async () => {
    render(<App/>);
    fireEvent.click(screen.getByTestId("sidebar"))
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Delivery info")).toBeInTheDocument();
});
