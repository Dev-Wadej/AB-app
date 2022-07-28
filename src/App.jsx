import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/Navigation/Navbar';
import './App.css';
import Signin from './routes/SignIn/Signin';
import SignUp from './routes/SignUp/SignUp';
import AuthenticatedUser from './routes/AuthenticatedUser/AuthenticatedUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="auth" element={<Signin />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>

        <Route path="main/*" element={<AuthenticatedUser />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
