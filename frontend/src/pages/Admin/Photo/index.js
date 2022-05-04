import React, {useContext} from 'react'
import { AuthContext } from '../../../AuthProvider';
import PageHeader from '../../../components/PageHeader/PageHeader';
import Navbar from '../../../components/Navbar/Navbar';
import UpdatePhotosForm from '../../../components/UpdateForm/UpdatePhotosForm';
const PhotoUpdate = () => {
    const { currentUser } = useContext(AuthContext);

  return (
    <div>
    <PageHeader/>
    <Navbar/>
    {currentUser && <UpdatePhotosForm/>}
      </div>
  )
}

export default PhotoUpdate