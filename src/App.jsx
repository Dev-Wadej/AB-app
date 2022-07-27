import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/Navigation/Navbar';
import './App.css';
import Signin from './routes/SignIn/Signin';
import SignUp from './routes/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="auth" element={<Signin />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
