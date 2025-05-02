import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import { expect, test } from 'vitest';

test('renders the App component', () => {
    render(<App />);
    const linkElement = screen.getByText('Vite + React'); // Match exact text
    expect(linkElement).toBeInTheDocument();
});
