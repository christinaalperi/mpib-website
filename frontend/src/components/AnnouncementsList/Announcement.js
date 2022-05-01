import React from 'react'
import { Message, MessageDiv, Details, AnnouncementItem } from './styles'


function Announcement(props) {
  return (
    <AnnouncementItem>
       <MessageDiv><Message>{props.title}</Message></MessageDiv>
       <Details>{props.details}</Details>
    </AnnouncementItem>
   
  )
}

export default Announcement