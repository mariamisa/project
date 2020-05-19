import React,{useState} from 'react';
import { Form, Input, Button,message,Alert } from 'antd';
import { withRouter } from 'react-router-dom'    
import GoogleAuth from './googleLogin'
import Axios from 'axios';
import './Register.css'

const RegisterComp= withRouter((props)=> {
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
        <div className="register-cont">
            <h1>Register</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="form-con"
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
                    <Button type="primary" htmlType="submit" className="btn">
                    Submit
                    </Button>
                    <GoogleAuth/>
                </Form.Item>
                {error && <Alert type="error" message={error} />}
            </Form>

        </div>
    )
    
})

export default RegisterComp