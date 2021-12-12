import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';


function post({ username, caption,imageurl}){
    return (
        <div className = "post">
            <div className = "post__header">

        
           <Avatar
           className = "post_avatar"
           alt="sravya_vani___"
           src = "https://i.pinimg.com/564x/51/4f/3d/514f3df161201ca7d65f22472f3770fa.jpg"
           /> 
            <h3>{username}</h3>
            

           </div>
            
            
            <img className="post_img "src = {imageurl}alt=""/>
            <h4 className="post_text"><strong>{username}</strong> {caption} </h4>
        
        </div>
    )
}

export default post