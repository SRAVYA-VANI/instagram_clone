import { Button } from '@material-ui/core';
import firebase from 'firebase';
import React, { useState } from 'react'
import {storage ,db } from "./firebase";
import './ImageUpload.css';


function ImageUpload({username}) {
const [Caption ,setCaption] = useState('');
const [Image,setImage] =useState(null);
const [progress ,setProgress] = useState(0);


const handleChange = (e) =>{
    if (e.target.files[0]){
        setImage(e.target.files[0]);
    }
};

const handleUpload = () =>{
    const uploadTask = storage.ref(`images/${Image.name}`).put(Image);

    uploadTask.on(
        "state_changed",
        (snapshot) => {

        const Progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) *100
        );
        setProgress(Progress);
    },
    (error) =>{
        console.log(error);
        alert(error.message);
    },
    ()=>{
        storage
        .ref("images")
        .child(Image.name)
        .getDownloadURL()
        .then(url =>{
            db.collection("posts").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                Caption: Caption,
                imageurl : url,
                username : username
            });

            setProgress(0);
            setCaption("");
            setImage(null);
        });
    }
    );
};
    return (
        <div className='imag_up'>

            <progress className='progress' value ={progress} max="100"/>
            <input className='capti_cls' type="text" placeholder='enter caption..' onChange={event => setCaption(event.target.value)} value={Caption}/>
            <input className='file_cls' type="file" onChange={handleChange}/><br></br>
            <button className='but_c' onClick={handleUpload}>
            Upload
            </button>
        </div>
    )
}

export default ImageUpload
