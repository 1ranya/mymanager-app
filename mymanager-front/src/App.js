import './App.css';
import UserProfil from './UI/User/UserProfil/UserProfil';
import UsersList from './UI/UsersList';
import { Routes, Route } from "react-router-dom";
import Header from './UI/Home/Header';
import HomePage from './UI/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<UserProfil />} />
          <Route path="/users-list" element={<UsersList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
