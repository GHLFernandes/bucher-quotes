import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the app with a button, a img and a quote', () => {
    render(<App />);

    const textEl = screen.getByText('Teste texto');
    const imgEl = screen.getByRole('img');
    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeInTheDocument();
    expect(imgEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
})