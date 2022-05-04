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
import QuestionUpdate from "./pages/Admin/Question"
import AnnouncementUpdate from "./pages/Admin/Announcement"
import CommiteeUpdate from "./pages/Admin/Committee"
import ContactUpdate from "./pages/Admin/Contact"
import LinkUpdate from "./pages/Admin/Hyperlink"
import PhotoUpdate from "./pages/Admin/Photo"

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
    	      <Route path='/contacts' element={<Contact/>} />
		        <Route path='/photos' element={<Photos/>} />
            <Route path='/admin' element={<Admin/>} />
            
            <Route path='/question' element={<QuestionUpdate/>}/>
            <Route path='/announcement' element={<AnnouncementUpdate/>}/>
            <Route path='/committee' element={<CommiteeUpdate/>}/>
            <Route path='/contact' element={<ContactUpdate/>}/>
            <Route path='/link' element={<LinkUpdate/>}/>
            <Route path='/photo' element={<PhotoUpdate/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
