import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="user-container">
      <ul className="user-list">
        {props.userList.map((user) => (
          <li className="user-entry" key={user.id}>
            {user.name}, {user.age} years old.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
