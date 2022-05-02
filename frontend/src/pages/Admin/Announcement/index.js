import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../AuthProvider';

import UpdateAnnouncementForm from '../../../components/UpdateForm/UpdateAnnouncementForm'
import PageHeader from '../../../components/PageHeader/PageHeader';
import Navbar from '../../../components/Navbar/Navbar';
const AnnouncementUpdate = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <PageHeader/>
      <Navbar/>
      {currentUser && <UpdateAnnouncementForm />}
    </div>
  )
}

export default AnnouncementUpdate