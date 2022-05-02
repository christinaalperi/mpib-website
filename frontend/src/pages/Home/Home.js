import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../../base";
import { AuthContext } from "../../AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import PageHeader from "../../components/PageHeader/PageHeader";
import AnnouncementList from "../../components/AnnouncementsList/AnnouncementList";
import Navbar from "../../components/Navbar/Navbar";
import { Container, AnnouncementsContainer, Background, Button, AddButtonDiv } from './styles';


function Home() {
  const { currentUser } = useContext(AuthContext);
  

  return (
    <div className="mainContainer">
      
     
      <PageHeader />
        <Navbar />
        {currentUser && console.log("authenticated")}
      
      <Container>
        <AnnouncementsContainer>
          <AnnouncementList />
          {currentUser && <AddButtonDiv><Link to='/admin'><Button>Add Announcement</Button></Link></AddButtonDiv>} 
          </AnnouncementsContainer>
        
        <Background>
        <ReactEmbeddedGoogleCalendar publicUrl="https://calendar.google.com/calendar/embed?src=myersparkibwebsite%40gmail.com&ctz=America%2FNew_York&title=IB%20Event%20Calendar&color=A3BDA7" width='400px' height='400px'></ReactEmbeddedGoogleCalendar>
          </Background>
      
      </Container>
      
        
    </div>
  );
}

export default Home;