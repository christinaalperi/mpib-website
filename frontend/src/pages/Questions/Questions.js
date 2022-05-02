import React, {useContext} from 'react'
import QuestionsList from '../../components/QuestionsList/QuestionsList'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import {Disclaimer, Background, Button, AddButtonDiv} from './styles'
import { AuthContext } from "../../AuthProvider";
import { Link } from 'react-router-dom';


function Questions() {

  const { currentUser } = useContext(AuthContext);


  return (
      <div>
        <PageHeader />
        <Navbar />
        <Disclaimer>**Answers from students on IB Leadership**</Disclaimer>
        <Background><QuestionsList /></Background>
        {currentUser&&<AddButtonDiv><Link to="/admin"><Button>Add Question</Button> </Link></AddButtonDiv>}
      </div>
   
  )
}

export default Questions