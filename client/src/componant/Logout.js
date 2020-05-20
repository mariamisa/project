import React from 'react';
import { message } from 'antd';
import { withRouter } from 'react-router-dom'    
import Axios from 'axios';

const LogOut= withRouter((props)=> {
        Axios.get('/api/v1/logout')
        .then(({data})=>{
            message.success(data.message);
            props.history.push('/')
        })
        .catch((res)=>{
            console.log(res);
            message.error('error on logout')
        })

    return(
       <>
       </>
    )
    
})

export default LogOut