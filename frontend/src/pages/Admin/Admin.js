import React, { useContext } from 'react'
import { AuthContext } from "../../AuthProvider";
import PageHeader from "../../components/PageHeader/PageHeader";
import Navbar from '../../components/Navbar/Navbar';

import { auth, db } from "../../base";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, LoginButtonDiv, Centering } from './styles'

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
      <LoginButtonDiv>
        <Button onClick={clickLogin}>
          {currentUser ? "Log Out" : "Log In"}
        </Button>
      </LoginButtonDiv>
      {currentUser && <Centering><Container>
        <Link to='/question'><Button>Edit Questions</Button></Link>
        <Link to='/announcement'><Button>Edit Announcements</Button></Link>
        <Link to='/committee'><Button>Edit Committees</Button></Link>
        <Link to='/contact'><Button>Edit Contacts</Button></Link>
      </Container></Centering>
      }
     
      
    </div>
  )
}

export default Admin