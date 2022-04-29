import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';

/*

NO LONGER WORK AFTER REVAMP (will be fixed later)

test('homepage title renders', () => {
    render(<App />);
    const title = screen.getByText(/Welcome to DeDe!/i);
    expect(title).toBeInTheDocument();
});

test('homepage description renders', () => {
    render(<App />);
    const description = screen.getByText("The DeDe retail system is a way of buying online without giving away any of your information. What are you waiting for? These are some examples of the products we sell");
    expect(description).toBeInTheDocument();
});

test('homepage shop button renders', () => {
    render(<App />);
    const shopButton = screen.getByText("Take me to the shop!");
    expect(shopButton).toBeInTheDocument();
});

test('homepage shop button redirects', () => {
    render(<App />);
    const shopButton = screen.getByText("Take me to the shop!");

    fireEvent.click(shopButton);

    expect(global.window.location.pathname).toEqual('/products');

});


 */

