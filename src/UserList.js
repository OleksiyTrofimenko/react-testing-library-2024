const UserList = ({ list = [] }) => {
  return (
    <ul data-testid="user-list">
      {list.map((user, index) => (
        <li key={`${index}-user`}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
};

export default UserList;