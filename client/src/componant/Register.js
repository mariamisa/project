import React,{useState} from 'react';
import { Form, Input, Button,message,Alert } from 'antd';
import { withRouter } from 'react-router-dom'    
import GoogleAuth from './googleLogin'
import Axios from 'axios';


const Register= withRouter((props)=> {
    const [error,seError]=useState();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    
    const onFinish = values => {
        Axios.post('/api/v1/register',values)
        .then(({data:{msg}})=>{
            message.success(msg);
            props.history.push('/')
        })
        .catch((res)=>{
            seError('email exists or error on register process')
        })
    };

    return(
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[{type:"email", required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="city"
                    name="city"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                {error && <Alert type="error" message={error} />}
            </Form>
            <GoogleAuth/>

        </div>
    )
    
})

export default Register