import React, { useState, useEffect } from 'react'
import { db } from "../../base";
import ContactCard from '../ContactCard/ContactCard';
import {Background} from './styles'
// need to figure out how to import a refreshed updated version of the contact list saved in firebase 


 const ContactsList =  () => {
   
  const [contacts, setContacts] = useState([{}]);

  const collection = db.collection("contacts")
 
  useEffect(() => {
    collection.onSnapshot((snapshot) => {
      const data = []
      snapshot.docs.map(doc => {
        data.push( {
          id:doc.id,
          name:doc.data().Name,
          role:doc.data().Role,
          email:doc.data().Email
        })
        
        
      })
      setContacts(data)
      console.log(contacts)
    });
  }, []);


  function createCard(contact) {
    return (
        <ContactCard name={contact.name} role={contact.role} email={contact.email}></ContactCard>
    );
  }
    
  return (
    <Background> 
      {contacts.map(createCard)}
    </Background>
  )
}

export default ContactsList