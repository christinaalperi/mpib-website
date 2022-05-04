import React, {useState, useEffect} from 'react'
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"; 
import { Body, Heading, Centering, Background, SubmitButton, FormElements} from './styles'
import { storage, db } from '../../base'

const UpdatePhotosForm = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [photoURL, setPhotoURL] = useState('')

    const uploadURL = (url) => {  
        console.log(url)
        addDoc(collection(db,'photos'),{
            url: url
        })

    }
    const uploadImage = (e) => {
        e.preventDefault()
        const fileType = imageUpload['type'];
        console.log(fileType)
        if(imageUpload==null) return;
        console.log(imageUpload)
        const storageRef = storage.ref()
        const uploadTask = storageRef.child(`/images/${imageUpload.name}`).put(imageUpload)
        uploadTask.on('state_changed', 
            (snapshot)=>{
                console.log(snapshot)  
                
            }, 
            (err)=>{
                console.log(err)
            }, 
            ()=>{
            storage
                .ref("/images")
                .child(imageUpload.name)
                .getDownloadURL()
                .then((url)=>{
                    console.log(`File available at: ${url}`)
                    // need to send url to firestore photos collection
                    setPhotoURL(url);
                    // setPhotoURLs(...photoURLs, url)
                    uploadURL(url);
                    alert("success")
                });
            
        })
    }
  return (
    <Body>

        <Centering>
            <Background>
                <Heading>Add Images</Heading>
                <FormElements>
                   
                    <input type='file' onChange={(e)=>{setImageUpload(e.target.files[0])}}></input>
                    <SubmitButton onClick={(e)=>uploadImage(e)}>Upload Image</SubmitButton>
                   
                </FormElements>
                
            </Background>
        </Centering>
    </Body>
  )
}

export default UpdatePhotosForm