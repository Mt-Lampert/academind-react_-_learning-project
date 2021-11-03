import "./UserList.css";

const UserList = (props) => {
  const userList = [
    { name: "Rich Harris", age: "37" },
    { name: "Laura Bitchface", age: "31" },
    { name: "Mark Wilson", age: "25" },
  ];

  return (
    <div className="user-container">
      <div className="user-list">
        {userList.map((user) => {
          return (
            <div className="user-entry">
              {user.name}, {user.age} years old.
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
