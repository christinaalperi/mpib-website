import React from 'react'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import {Disclaimer, Background} from './styles'

function Questions() {
  return (
      <div>
        <PageHeader />
        <Navbar />
        <Disclaimer>**Answers from students on IB Leadership**</Disclaimer>
        <Background><QuestionsList /></Background>
      </div>
   
  )
}

export default Questions