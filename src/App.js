// import logo from './logo.svg';
import './App.css';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Add User Project</h2>
        <p>Academind Learning Project, Module 8</p>
      </header>

      <main>
        <NewUser />
        <UserList />
      </main>
    </div>
  );
}

export default App;
