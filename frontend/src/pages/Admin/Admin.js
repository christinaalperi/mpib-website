import React, { useContext } from 'react'
import { AuthContext } from "../../AuthProvider";
import PageHeader from "../../components/PageHeader/PageHeader";
import UpdateContactForm from '../../components/UpdateForm/UpdateContactForm';
import Navbar from '../../components/Navbar/Navbar';
import UpdateCommitteeForm from '../../components/UpdateForm/UpdateCommitteeForm';
import UpdateAnnouncementForm from '../../components/UpdateForm/UpdateAnnouncementForm';
import UpdateQuestionsForm from '../../components/UpdateForm/UpdateQuestionsForm';
import { auth, db } from "../../base";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Container } from './styles'

function Admin() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
 

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/login");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <PageHeader />
      <Navbar />
      <div>
        <button onClick={clickLogin}>
          {currentUser ? "Log Out" : "Log In"}
        </button>
      </div>
      <Container>
        {currentUser && <UpdateAnnouncementForm/>}
        {currentUser && <UpdateContactForm/> }
        {currentUser && <UpdateCommitteeForm/>}
        {currentUser && <UpdateQuestionsForm/>}
      </Container>
     
      
    </div>
  )
}

export default Admin