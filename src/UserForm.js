import { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      email
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input value={name} type="text" id="name" onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} type="text" id="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <button type="submit">Add User</button>
    </form>
  )
};

export default UserForm;