import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from "react"
import { Products } from './products'
import Register from './pages/Register';
import Home from './pages/Home'
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './Header';
import Detail from './pages/Detail'
import Counter from './pages/Counter'
import Todoform from './pages/Todoform';
import EditTodo from './pages/EditTodo';



function App() {
  const [Product, setproduct] = useState(Products)
  return (
    <div className="Container">
      {/* <Home/>
        <Register />
        <Login/> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/Counter" element={<Counter/>} />
          <Route path="/todoform" element={<Todoform/>} />
          <Route path="/edit-todo/:id" element={<EditTodo/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;