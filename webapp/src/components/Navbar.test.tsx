import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
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