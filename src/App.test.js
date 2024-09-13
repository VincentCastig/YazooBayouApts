import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  let container = null;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  it('renders without crashing', () => {
    render(<App />, container);
  });
});
