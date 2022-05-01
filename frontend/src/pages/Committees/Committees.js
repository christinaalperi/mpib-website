import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import CommitteeCardList from '../../components/CommitteeCardList/CommitteeCardList'
import {PageContainer} from './styles'
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
    {currentUser && <Link to='/admin'><button>Add Committee</button></Link>} 

    </div>
  )
}

export default Committees