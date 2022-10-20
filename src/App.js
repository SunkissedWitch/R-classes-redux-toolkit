import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/Register';

class App extends React.Component {
  
  render () {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
