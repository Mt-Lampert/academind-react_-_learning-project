import "./NewUser.css";

const NewUser = (props) => {
  return (
    <div className="new-user">
      <h2>Baustelle: Formular "New User"</h2>
      <div className="new-user__label">
        <label htmlFor="theName">Name</label>
      </div>
      <div className="new-user__input">
        <input
          type="text"
          name="theName"
          id="theName"
          value=""
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
          value=""
          placeholder="Please enter the age"
        />
      </div>
      <div className="add-user">
        <button>Add User</button>
      </div>

    </div>
  );
};

export default NewUser;
