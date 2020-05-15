import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const successResponse = (response) => {
    const { tokenId } = response;
    axios.post('/api/v1/login/google', { tokenId }).then(console.log).catch(console.log);
};

const failureResponse = (response) => {
    console.log('error', response);
};

function GoogleAuth(){
    return(
        <GoogleLogin
        clientId="1010593884954-54qjone82lhngfpdq74ce3bkd43vavap.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy={'single_host_origin'}
    />
    )
}

export default GoogleAuth