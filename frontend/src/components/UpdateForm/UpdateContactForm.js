import React, { useState, useEffect } from 'react'
import { db, storage } from '../../base';
import { doc, collection, addDoc, deleteDoc } from "firebase/firestore"; 
import {Heading, Body, FormElements, DeleteContactsDiv, SubmitButton, Background, Centering} from './styles'

function UpdateContactForm() {

  const [contacts, setContacts] = useState([{}])
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [imageUpload, setImageUpload] = useState(null)
 // const [photoURL, setPhotoURL] = useState('')
 // const defaultUserURL = 'https://firebasestorage.googleapis.com/v0/b/myersparkibwebsite-cb3ea.appspot.com/o/contactImages%2Fdefault-user.png?alt=media&token=134b62f2-dfb5-4a2c-b1aa-a98eb80e82a3'
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

  // const uploadURL = (url) => {  
  //   console.log(url)
  //   addDoc(collection(db,'contactPhotoURLs'),{
  //       url: url
  //   })

  // }
  // const uploadImage = () => {
          
  //         if(imageUpload!==null) {
  //           const fileType = imageUpload['type'];
  //           console.log(fileType)
  //           console.log(imageUpload)
  //           const storageRef = storage.ref()
  //           const uploadTask = storageRef.child(`/contactImages/${imageUpload.name}`).put(imageUpload)
  //           uploadTask.on('state_changed', 
  //               (snapshot)=>{
  //                   console.log(snapshot)  
                    
  //               }, 
  //               (err)=>{
  //                   console.log(err)
  //               }, 
  //               ()=>{
  //               storage
  //                   .ref("/contactImages")
  //                   .child(imageUpload.name)
  //                   .getDownloadURL()
  //                   .then((url)=>{
  //                       console.log(`File available at: ${url}`)
  //                       // need to send url to firestore photos collection
  //                       setPhotoURL(url)
  //                       uploadURL(url);
  //                   });
                
  //           })
  //           }
  //     }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    contacts.forEach((el)=>{
      if((el.Name!='')&&(document.getElementById(el.Name).checked==true)){
        console.log(el.id);
        deleteDoc(doc(db,"contacts",el.id));
      }
      
    })
  }

  return (
    <Body>
     <Centering><Background>
     <Heading>Add Contact </Heading>
        <FormElements>
          <label>
            Name: <input id='setName' type='text' value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
          </label>
          <label>
            Email: <input id='setEmail' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>
          <label>
            Role: <input id='setRole' type='text' value={role} onChange={(e)=>setRole(e.target.value)}/>
          </label>
          {/* <label>
            Photo: <input id='setImg' type='file' onChange={(e)=>setImageUpload(e.target.files[0])}/>
          </label> */}
          <SubmitButton type="submit" value="Submit" onClick={(e) => {
              e.preventDefault();
              console.log('button clicked')
              //uploadImage();
              if((fullname!=='')&&(email!=='')&&(role!=='')) {
                addDoc(collection(db, "contacts"), {
                  Name: fullname,
                  Email: email,
                  Role: role
                  //imgURL: defaultUserURL
                  
                }).then(
                  alert("Success")
                )
                
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