import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('render button with text', () => {
    render(<Button>Test</Button>);

    const btnEl = screen.getByText('Test');

    expect(btnEl).toBeInTheDocument();
})