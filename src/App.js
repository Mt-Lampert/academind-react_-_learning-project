// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Add User Project</h2>
        <p>Academind Learning Project, Module 8</p>
      </header>

      <main>
        <div class="modal-toggle">
          <button class="toggle-modal" onClick={toggleModal}>
            Toggle Modal
          </button>
        </div>
        <NewUser />
        <UserList />
        <Modal show={showModal} hide={toggleModal} />
      </main>
    </div>
  );
}

export default App;
