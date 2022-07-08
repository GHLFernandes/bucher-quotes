import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

const response = { speaker: 'Speaker', quote: 'Teste texto'};

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('tests App', () => {
    test('renders the app with a button, a img and a quote', () => {
        render(<App />);
    
        const textEl = screen.getByText('ok');
        const imgEl = screen.getByRole('img');
        const buttonEl = screen.getByRole('button');
    
        expect(buttonEl).toBeInTheDocument();
        expect(imgEl).toBeInTheDocument();
        expect(textEl).toBeInTheDocument();
    });

    test('calls api on button click and update its text', async () => {
        render(<App />);

        const buttonEl = screen.getByRole('button');

        fireEvent.click(buttonEl);
        
        const quoteEl = await screen.findByText(response.quote);

        expect(quoteEl).toBeInTheDocument();
        
    });
});

