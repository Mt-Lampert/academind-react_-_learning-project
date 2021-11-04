// import logo from './logo.svg';
import "./App.css";
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Add User Project</h2>
        <p>Academind Learning Project, Module 8</p>
      </header>

      <main>
        <div class="modal-toggle">
          <button class="toggle-modal">Toggle Modal</button>
        </div>
        {/* <NewUser />
        <UserList /> */}
        <Modal />
      </main>
    </div>
  );
}

export default App;
