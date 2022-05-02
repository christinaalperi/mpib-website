import React, { useState, useEffect } from 'react'
import { db } from '../../base';
import { doc, collection, addDoc, deleteDoc } from "firebase/firestore"; 
import {Heading, Body, FormElements, DeleteContactsDiv, SubmitButton, Background, Centering} from './styles'
function UpdateContactForm() {

  const [contacts, setContacts] = useState([{}])
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const contactsCollection = db.collection("contacts");
  useEffect(()=>{
    contactsCollection.onSnapshot((snapshot)=>{
      const contactsData = [];
      snapshot.docs.map((doc)=>{
        contactsData.push({
          id: doc.id,
          Name: doc.data().Name,
          Email: doc.data().Email,
          Role: doc.data().Role
        })
      })
      setContacts(contactsData)
    })
  },[])



  const handleOnSubmit = (e) => {
    e.preventDefault();
    // iterate through the checkedState array and looked for the checked indices and then get the id of those items and then deleteDoc

    contacts.forEach((el)=>{
      if(document.getElementById(el.Name).checked==true){
        console.log(el.id);
        deleteDoc(doc(db,"contacts",el.id));
      }
      
    })

    // checkedState.forEach((state,index)=>{
    //   console.log(state)
    //   if(state==true){
    //     const contactIDToBeDeleted = contacts[index].id;
    //     deleteDoc(doc(db,"contacts",contactIDToBeDeleted));
        
    //   }
    // })
  }

  return (
    <Body>
     <Centering><Background>
     <Heading>Add Contact </Heading>
        <FormElements>
          <label>
            Name: <input type='text' value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
          </label>
          <label>
            Email: <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>
          <label>
            Role: <input type='text' value={role} onChange={(e)=>setRole(e.target.value)}/>
          </label>
          <SubmitButton type="submit" value="Submit" onClick={(e) => {
              e.preventDefault();
             if((fullname!='')&&(email!='')&&(role!='')) {
              addDoc(collection(db, "contacts"), {
                Name: fullname,
                Email: email,
                Role: role
              });
             }
              
            }}>Submit</SubmitButton>
        </FormElements>
     </Background>
       
        

    

    <Background><Heading>Delete Contact(s)</Heading>
      <DeleteContactsDiv>
      <ul style={{'listStyle':'none'}}>
      {contacts.map((item, index)=>{
        
          return(
            <li key={index}>
              
              <label><input id={item.Name} type="checkbox" name={item.Name} value={item.Name}/>{item.Name}</label>
            </li>

          )
        })}
      </ul>
      <SubmitButton type="submit" value="Submit" onClick={(e)=>handleOnSubmit(e)}>Submit</SubmitButton>
    
      </DeleteContactsDiv></Background></Centering>
      
      
      

    
    </Body>
    
  )
}

export default UpdateContactForm