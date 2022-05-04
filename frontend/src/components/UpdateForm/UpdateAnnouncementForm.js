import React, {useState, useEffect} from 'react'
import { db } from '../../base';
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { Heading, Body, FormElements, SubmitButton, Background, Centering} from './styles'

function UpdateAnnouncementForm() {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [announcements, setAnnouncements] = useState([{}]);

    const announcementsCollection = db.collection("announcements");
    const handleOnSubmit = (e) => {
      e.preventDefault();
  
      announcements.forEach((el)=>{
        if(document.getElementById(el.title).checked==true){
          console.log(el.id);
          deleteDoc(doc(db,"announcements",el.id));
        }
        
      })
    }
    useEffect(()=>{
      announcementsCollection.onSnapshot((snapshot)=>{
        const announcementsData = [];
        snapshot.docs.map((doc)=>{
          announcementsData.push({
            id: doc.id,
            title: doc.data().title,
            details: doc.data().details
          })
        })
        setAnnouncements(announcementsData);
      })
    },[announcements])


    
  return (
    <Body>
     <Centering> <Background>
      <Heading>Add Announcement</Heading>
        <FormElements>
       
            <label>
                Title: <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <label>
                Details: <input type='text' value={details} onChange={(e)=>setDetails(e.target.value)}/>
            </label>
            <SubmitButton type='submit' value="Submit" onClick={(e)=>{
                e.preventDefault();
               if((title!='')&&(details!='')){
                addDoc(collection(db, 'announcements'), {
                    title: title, 
                    details: details
                })
               }
            }}>Submit</SubmitButton>
        
          </FormElements>
      </Background>

      <Background>
        <Heading>Delete Announcement(s)</Heading>
        <ul style={{'listStyle':'none'}}>
      {announcements.map((item, index)=>{
        
          return(
            <li key={index}>
              
              <label><input id={item.title} type="checkbox" name={item.title} value={item.title}/>{item.title}</label>
            </li>

          )
        })}
      </ul>
        <SubmitButton onClick={(e)=>handleOnSubmit(e)}>Submit</SubmitButton>
     
      </Background>
        </Centering>
        

    </Body>
  )
}

export default UpdateAnnouncementForm