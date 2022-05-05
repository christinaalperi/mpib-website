import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageHeader from '../../components/PageHeader/PageHeader'
import { db } from '../../base'



import {Image, GalleryContainer, ImageContainer} from './styles'

function Photos() {
  const [urls, setURLs] = useState([])
  const gallery = [];
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
        
        
        <GalleryContainer>
        {urls.map((url)=>{
         if(url.url!=='') return <ImageContainer><Image src={url.url}/></ImageContainer>
        })}
        </GalleryContainer>
        
 
    </div>
  )
}

export default Photos