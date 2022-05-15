import React, { useState, useEffect} from 'react'
import { db } from '../../base';
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { Heading, Body, FormElements, SubmitButton, Background, Centering } from './styles'

const UpdateLinksForm = () => {
  const [links, setLinks] = useState([{}]);
  const [newURL, setNewURL] = useState('')
  const [newLinkedTo, setNewLinkedTo] = useState('')
  const linksCollection = db.collection("links")
  useEffect(()=>{
    linksCollection.onSnapshot((snapshot)=>{
      const data=[]
      snapshot.docs.map((doc)=>{
        data.push({
          id: doc.id,
          url: doc.data().url,
          linkedTo: doc.data().linkedTo
        })
      })
      setLinks(data);
    })
  },[]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // iterate through the checkedState array and looked for the checked indices and then get the id of those items and then deleteDoc

    links.forEach((el)=>{
      if(document.getElementById(el.url).checked==true){
        console.log(el.id);
        deleteDoc(doc(db,"links",el.id)).then(()=>{
          alert("success")
        });
      }
      
    })
}

  return (
    <Body>
      <Centering>
        <Background>
          <Heading>Add Link</Heading>
          <FormElements>
            <label>
              Link Name: <input id="addLinkName" type='text' onChange={(e)=>setNewLinkedTo(e.target.value)}></input>
            </label>
            <label>
              URL: <input id="addLinkURL" type='text' onChange={(e)=>setNewURL(e.target.value)}/>
            </label>
            <SubmitButton type='submit' value="Submit" onClick={(e)=>{
              e.preventDefault();
              if(newLinkedTo!=='' && newURL !=='') {
                addDoc(collection(db, 'links'), {
                  url: newURL, 
                  linkedTo: newLinkedTo
              })
              document.getElementById('addLinkName').value=''
              document.getElementById('addLinkURL').value=''
              }
            }}>Submit</SubmitButton>
          </FormElements>
        </Background>


        <Background>
          <Heading>Delete Link</Heading>
          <ul style={{'listStyle':'none'}}>
      {links.map((item, index)=>{
        
          return(
            <li key={index}>
              
              <label><input id={item.url} type="checkbox" name={item.linkedTo} value={item.linkedTo}/>{item.linkedTo}</label>
            </li>

          )
        })}
      </ul>
      <SubmitButton type="submit" value="Submit" onClick={(e)=>handleOnSubmit(e)}>Submit</SubmitButton>
        </Background>
      </Centering>


      
    </Body>
  )
}

export default UpdateLinksForm