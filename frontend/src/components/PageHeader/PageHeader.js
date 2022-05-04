import React from 'react'
import logo from '../../images/logo.png'
import { Container, MPTitle, IBTitle, MissionStatement, Background } from './styles'
function PageHeader() {
    
  return (
    <Background>
      <Container className='Header'>
        <MPTitle>Myers Park</MPTitle>
        <img src={logo} height='80px'></img>
         <IBTitle>IB Program</IBTitle>
      </Container>
      <MissionStatement>Empower each student to define and experience individual success.</MissionStatement>
    </Background>
      
  )
}

export default PageHeader