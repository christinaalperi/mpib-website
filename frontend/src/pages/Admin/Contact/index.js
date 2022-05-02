import React, {useContext} from 'react'
import { AuthContext } from '../../../AuthProvider';
import UpdateContactForm from '../../../components/UpdateForm/UpdateContactForm';

import PageHeader from '../../../components/PageHeader/PageHeader';
import Navbar from '../../../components/Navbar/Navbar';


const ContactUpdate = () => {

  const { currentUser } = useContext(AuthContext);
  return (
    <div><PageHeader/><Navbar/>
      { currentUser && <UpdateContactForm />}
    </div>
  )
}

export default ContactUpdate