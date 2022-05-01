import React from 'react'
import {Container, Name, Role, Email, CardLayout} from './styles';
import logo from '../../images/logo.png'
import Avatar from './Avatar';

function ContactCard(props) {
  return (
    <CardLayout>
                <Container className='card'>
                    <Name className='name'>{props.name}</Name>
                    <Role className='role'>{props.role}</Role>
                    <Email className='email'>{props.email}</Email>
                </Container>
            </CardLayout>
  )
}

export default ContactCard