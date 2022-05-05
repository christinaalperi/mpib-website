import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import CommitteeCardList from '../../components/CommitteeCardList/CommitteeCardList'
import {PageContainer, Button, AddButtonDiv} from './styles'
import { AuthContext } from "../../AuthProvider";
import { Link } from 'react-router-dom';


function Committees() {
  const { currentUser } = useContext(AuthContext);  
  return (
    <div>
      <PageHeader />
       <Navbar />
     <PageContainer>
        <CommitteeCardList />
    </PageContainer>
    {currentUser && <AddButtonDiv><Link to='/committee'><Button>Add Committee</Button></Link></AddButtonDiv>} 

    </div>
  )
}

export default Committees