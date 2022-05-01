import React, { useState, useEffect, useContext} from 'react'
import Announcement from './Announcement'
import { db } from "../../base";
import {Background} from './styles'


// this list needs to be a listener of the changes Admin makes to the form

// in order to do that i have to add a databasse collection for the announcements and then here render that database's current list sending the message to the Announcement components props 


const AnnouncementList =  () => {
  
 const [announcements, setAnnouncements] = useState([{}]);

 const collection = db.collection("announcements")

 useEffect(() => {
   collection.onSnapshot((snapshot) => {
     const data = []
     snapshot.docs.map(doc => {
       data.push( {
         id:doc.id,
         title:doc.data().title,
         details:doc.data().details,
       })
       
       
     })
     setAnnouncements(data)
     console.log(announcements)
   });
 }, []);


 function createCard(announcement) {
   return (
       <Announcement title={announcement.title} details={announcement.details}></Announcement>
   );
 }
   
 return (
   <Background> 
     {announcements && announcements.map(createCard)}
   </Background>
 )
}


export default AnnouncementList