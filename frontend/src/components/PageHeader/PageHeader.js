import React from 'react'
import logo from '../../images/logo.png'
import { Container, MPTitle, IBTitle } from './styles'
function PageHeader() {
    
  return (
      <Container className='Header'>
        <MPTitle>Myers Park</MPTitle>
        <img src={logo} height='80px'></img>
         <IBTitle>IB Program</IBTitle>
      </Container>
   
  )
}

export default PageHeader