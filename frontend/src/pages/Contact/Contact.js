import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import ContactsList from '../../components/ContactCardsList/ContactsList'
import { AuthContext } from "../../AuthProvider";
import { AddButtonDiv, Button } from './styles';
import { Link } from 'react-router-dom';


function Contact() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
        <PageHeader />
        <Navbar />
        <ContactsList />
       {currentUser && <AddButtonDiv><Link to='/admin'><Button>Add Contact</Button></Link></AddButtonDiv>} 
    </div>
  )
}

export default Contact