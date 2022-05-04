import React, {useContext} from 'react'
import { AuthContext } from '../../../AuthProvider';
import PageHeader from '../../../components/PageHeader/PageHeader';
import Navbar from '../../../components/Navbar/Navbar';
import UpdateLinksForm from '../../../components/UpdateForm/UpdateLinksForm';
const LinkUpdate = () => {
    const { currentUser } = useContext(AuthContext);

  return (
    <div>
    <PageHeader/>
    <Navbar/>
    {currentUser && <UpdateLinksForm/>}
      </div>
  )
}

export default LinkUpdate