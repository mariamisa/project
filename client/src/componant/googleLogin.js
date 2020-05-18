import React,{useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

function GoogleAuth(){

    const [userId,setUserId]=useState();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [addUser,setAddUser]=useState(false)

    if(addUser){
        axios.post('/api/v1/register',
        {name,email:"mariiiippjl5kka@gmail.com",password:"11111",userId})
        .then(console.log)
        .catch(console.log)
    }

    const successResponse = (response) => {
        const { tokenId } = response;
        axios.post('/api/v1/login/google', { tokenId })
        .then(({data:{email,name,sub}})=>{
            setUserId(sub)
            setEmail(email)
            setName(name)
            setAddUser(true)
        })
        .catch(console.log);
    };
    
    const failureResponse = (response) => {
        console.log('error', response);
    };

    return(
        <div>
            <GoogleLogin
                clientId="1010593884954-54qjone82lhngfpdq74ce3bkd43vavap.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={successResponse}
                onFailure={failureResponse}
                cookiePolicy={'single_host_origin'}
            />
            {email}
        </div>
        
    )
}

export default GoogleAuth