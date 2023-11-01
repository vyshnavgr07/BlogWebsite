import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import { createContext, useContext, useState } from 'react';
export const BlogeContext=createContext();

function App() {
  const [post,setPost]=useState([]);
    return (
    <div className="App">

<BlogeContext.Provider value={{post,setPost}}> 
  <Routes>
       <Route    path='/'     element={<Create/>} />
        <Route   path="/blogs"  element={<Blogs/>} />
        <Route   path="/blog/:id"    element={<Blog/>} />
   </Routes>
    
   </BlogeContext.Provider>



    </div>
  );
}

export default App;
