import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two input and a button', () => {
  // render component
  render(<UserForm />);

  // Manipulate the component or find an element of it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing

  // What we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onSubmit when the form is submitted', () => {
  // Bad approach
  // const arrList = [];
  // const callback = (...args) => {
  //   arrList.push(args);
  // };

  // Good approach
  const mockFn = jest.fn();

  render(<UserForm onSubmit={mockFn} />);
  const [nameInput, emailInput] = screen.getAllByRole('textbox', {
    name: /name|email/i // regex for multiple labels
  });

  // Bad approach for each input
  // const nameInput = screen.getByRole('textbox', {
  //   name: /name/i
  // });

  // const emailInput = screen.getByRole('textbox', {
  //   name: /email/i
  // });

  // Simulate typing on email
  user.click(nameInput);
  user.keyboard('John Doe');

  // Simulate typing on name
  user.click(emailInput);
  user.keyboard('john@gmail.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking on the button
  user.click(button);

  // Assertion - make sure 'onSubmit' is called with email/name
  // Good approach
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@gmail.com' });

  // Bad approach
  // expect(arrList).toHaveLength(1);
  // expect(arrList[0][0]).toEqual({ name: 'John Doe', email: 'john@gmail.com'});
});