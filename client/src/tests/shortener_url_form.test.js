import React from 'react';
import { render } from '@testing-library/react';
import ShortenerUrlForm from '../components/shortener_url/shortener_url_form';

test('renders form with input', () => {
    const { queryAllByTestId, baseElement } = render(<ShortenerUrlForm />);
    const form = queryAllByTestId("shortenerForm");
    expect(form).toBeInTheDocument();
});
