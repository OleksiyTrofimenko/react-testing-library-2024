import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  // Render component
  const users = [{
    name: 'John Doe',
    email: 'john@gmail.com'
  }, {
    name: 'Sam',
    email: 'sam@gmail.com'
  }];

  render(<UserList list={users} />);

  // Find all the rows in the table
  // screen.logTestingPlaygroundURL(); // Attractive UI for debugging
  const rows = within(screen.getByTestId('user-list')).getAllByRole('listitem'); // row if table, listitem if ul

  // Assertion - correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name for each user', () => {
  const users = [{
    name: 'John Doe',
    email: 'john@gmail.com'
  }, {
    name: 'Sam',
    email: 'sam@gmail.com'
  }];

  render(<UserList list={users} />);

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { email: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
