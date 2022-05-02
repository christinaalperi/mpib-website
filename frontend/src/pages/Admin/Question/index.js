import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider';
import UpdateQuestionsForm from '../../../components/UpdateForm/UpdateQuestionsForm';
import PageHeader from '../../../components/PageHeader/PageHeader';
import Navbar from '../../../components/Navbar/Navbar';
const QuestionUpdate = () => {
    
    const { currentUser } = useContext(AuthContext);


  return (
    <div>
      <PageHeader/>
      <Navbar/>

        {currentUser && <UpdateQuestionsForm/>}
    </div>
    
  )
}

export default QuestionUpdate