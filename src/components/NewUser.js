import { useState } from "react";

import "./NewUser.css";

const NewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = () => {
    props.addUser({
      id: Math.floor(Math.random() * 10000) + 4,
      name: userName,
      age: userAge,
    });
    setUserName('');
    setUserAge('');
    document.getElementById('theName').focus();
  };

  return (
    <div className="new-user">
      <div className="new-user__label">
        <label htmlFor="theName">Name</label>
      </div>
      <div className="new-user__input">
        <input
          type="text"
          name="theName"
          id="theName"
          onChange={handleNameChange}
          value={userName}
          placeholder="Please enter the name"
        />
      </div>
      <div className="new-user__label">
        <label htmlFor="theName">Age</label>
      </div>

      <div className="new-user__input">
        <input
          type="text"
          name="theAge"
          id="theAge"
          value={userAge}
          placeholder="Please enter the age"
          onChange={handleAgeChange}
        />
      </div>
      <div className="add-user">
        <button onClick={submitHandler}>Add User</button>
      </div>
    </div>
  );
};

export default NewUser;
