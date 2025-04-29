import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { screen } from '@testing-library/react';

it('should renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOMClient.createRoot(div).render(<App />);
});

it('should be in the screen', () => {
  expect(screen.getByText('qualquer coisa')).toBeInTheDocument();
})