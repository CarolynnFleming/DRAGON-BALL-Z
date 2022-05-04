import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
    it('should navigate between list & detail views', async () => {
        render(
            <MemoryRouter initialEntries={['/characters']}>
                <App />
            </MemoryRouter>
        );

        screen.getByText(/loading/i)
//for list page
        const link = await screen.findByText('Castle in the Sky');
        userEvent.click(link);

        await screen.findByText('Loading Movie...');
    })
})