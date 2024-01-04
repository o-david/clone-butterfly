import React from 'react'
import './App.css'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Error from './pages/Error';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
