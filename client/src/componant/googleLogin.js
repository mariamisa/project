import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { withRouter } from 'react-router-dom';    
import {message} from 'antd'
import axios from 'axios';

const GoogleAuth=withRouter((props)=>{
    const successResponse = (response) => {
        const { tokenId,name } = response;
        axios.post('/api/v1/login/google', { tokenId,name })
        .then(({data:{email}})=>{
            message.success(`login with ${email}`)
            props.history.push('/')
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
        </div>
        
    )
})

export default GoogleAuth