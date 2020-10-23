import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

// Components
import { FalseNegative } from '.';

test('should increade, decrease, reset and check the counter value - by text', () => {
  const { debug } = render(<FalseNegative />);
  debug();

  expect(screen.getByText('0')).not.toBeNull();
  userEvent.click(screen.getByText('-'));
  userEvent.click(screen.getByText('-'));
  expect(screen.getByText('-2')).not.toBeNull();

  userEvent.click(screen.getByText('+'));
  expect(screen.getByText('-1')).not.toBeNull();

  userEvent.click(screen.getByText('Reset'));
  expect(screen.getByText('0')).not.toBeNull();
});

test('should increade, decrease, reset and check the counter value - by tagname', () => {
  const { debug, container } = render(<FalseNegative />);
  debug();

  expect(container.querySelector('span')?.textContent).toBe('0');
  userEvent.click(container.querySelectorAll('button')[1]);
  userEvent.click(container.querySelectorAll('button')[1]);
  expect(container.querySelector('span')?.textContent).toBe('-2');

  userEvent.click(container.querySelectorAll('button')[2]);
  expect(container.querySelector('span')?.textContent).toBe('-1');

  userEvent.click(container.querySelectorAll('button')[0]);
  expect(container.querySelector('span')?.textContent).toBe('0');
});

test('should increade, decrease, reset and check the counter value - by aria label', () => {
  const { debug } = render(<FalseNegative />);
  debug();

  expect(screen.getByLabelText('Counter').textContent).toBe('0');
  userEvent.click(screen.getByLabelText('Decrease'));
  userEvent.click(screen.getByLabelText('Decrease'));
  expect(screen.getByLabelText('Counter').textContent).toBe('-2');

  userEvent.click(screen.getByLabelText('Increase'));
  expect(screen.getByLabelText('Counter').textContent).toBe('-1');

  userEvent.click(screen.getByLabelText('Reset'));
  expect(screen.getByLabelText('Counter').textContent).toBe('0');
});
