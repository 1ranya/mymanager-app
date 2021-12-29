import './App.css';
import UserProfil from './UI/User/UserProfil/UserProfil';
import UserProfilForm from './UI/User/UserForm/UserProfil';
import UsersList from './UI/UsersList';
import { Routes, Route } from "react-router-dom";
import Header from './UI/Home/Header';
import HomePage from './UI/Home/HomePage';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <div className='content'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile/:id" element={<UserProfil />} />
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/new-profil" element={<UserProfilForm />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
