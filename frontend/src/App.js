import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./components/Login/Login"
import Questions from "./pages/Questions/Questions"
import Photos from './pages/Photos/Photos'
import Committees from './pages/Committees/Committees'
import Admin from './pages/Admin/Admin'

import Contact from './pages/Contact/Contact'
import { AuthProvider } from "./AuthProvider"

function App() {

  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/committees' element={<Committees/>} />
            <Route exact path="/login" element={<Login />} />
            <Route path='/questions' element={<Questions/>} />
    	      <Route path='/contact' element={<Contact/>} />
		        <Route path='/photos' element={<Photos/>} />
            <Route path='/admin' element={<Admin/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
