// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

function App() {
  // const myUserList = [
  //   { id: 1, name: "Rich Harris", age: "37" },
  //   { id: 2, name: "Laura Bitchface", age: "31" },
  //   { id: 3, name: "Mark Wilson", age: "25" },
  // ];
  const myModalData = {
    title: "Error Case Testing",
    msg: "This is the error message for testing",
  };
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [modalData, setModalData] = useState(myModalData);

  const addUser = (newUser) => {
    // all validation happens here!
    if (newUser.name.length === 0 && newUser.age.length === 0) {
      setModalData(() => {
        return {
          title: "No Data Given!",
          msg: "Please enter the name and the age in the formula.",
        };
      });
      setShowModal(true);
      return;
    } else if (
      newUser.name.length > 0 &&
      (newUser.age.length === 0 || parseInt(newUser.age) <= 0)
    ) {
      setModalData(() => {
        return {
          title: "Error: Missing or Invalid age",
          msg: "Please enter a valid age.",
        };
      });
      setShowModal(true);
      return;
    } else if (newUser.name.length === 0 && newUser.age.length > 0) {
      setModalData(() => {
        return {
          title: "Error: Missing Name",
          msg: "Please enter a valid name.",
        };
      });
      setShowModal(true);
      return;
    }

    // implicit 'else'
    setUserList(() => [newUser, ...userList]);
  };

  const toggleModal = () => {
    // setModalData(modalData);
    setShowModal(!showModal);
    document.getElementById("theName").focus();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Add User Project</h2>
        <p>Academind Learning Project, Module 8</p>
      </header>

      <main>
        {/* <div className="modal-toggle">
          <button className="toggle-modal" onClick={toggleModal}>
            Toggle Modal
          </button>
        </div> */}
        <NewUser addUser={addUser} />
        {/* Don't display an empty user list */}
        {userList.length > 0 && <UserList userList={userList} />}
        <Modal show={showModal} hide={toggleModal} data={modalData} />
      </main>
    </div>
  );
}

export default App;
