import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import { storage, db } from '../../base'
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import {Image} from './styles'

function Photos() {
  const [urls, setURLs] = useState([])
  
  const urlCollection = db.collection('photos')

  useEffect(()=>{
    urlCollection.onSnapshot((snapshot)=> {
      const data = [];
      snapshot.docs.map((doc)=>{
        data.push({
          id: doc.id,
          url: doc.data().url
        })
      })
      setURLs(data);      
    })

  },[])

  return (
    <div>
        <PageHeader />
        <Navbar/>
        {urls.map((url)=>{
          console.log(url)
          if(url.url!=='') return <Image src={url.url}/>
        })}
    </div>
  )
}

export default Photos