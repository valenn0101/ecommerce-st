import React from "react";
import Header from '../Header'
import { render } from "@testing-library/react";

jest.mock('../../../utils/auth', () => ({
    useAuthentication: () => ({
        handleLogout: jest.fn()
    })
}));

jest.mock('js-cookie', () => ({
    get: jest.fn()
}));

describe("Header component", () => {
    it("Renders logout button when session is open", () => {
        jest.spyOn(require('js-cookie'), 'get').mockReturnValue('sessionId');
        const { getByText } = render(<Header />);
        const logoutButton = getByText("Log out");
        expect(logoutButton).toBeInTheDocument();
    });

    it("Does not render logout button when session is closed", () => {
        jest.spyOn(require('js-cookie'), 'get').mockReturnValue(null);
        const { queryByText } = render(<Header />);
        const logoutButton = queryByText("Log out");
        expect(logoutButton).toBeNull();
    });
});
