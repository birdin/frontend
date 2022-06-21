import react from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('login page', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        render(<Login />)
    }
    )
}
)