import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../styles/ProductOwnerAdd.css';
import Navbar from "../components/Navbar";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 16,
    },
};

const ProductOwnerAddScreen = () => {
    const [brandName, setBrandName] = useState('');
    const [location , setLocation] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [contactEmail , setContactEmail] = useState('');
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try{
            await axios.post('http://localhost:4000/owner',{
                brandName: brandName,
                location: location,
                contactNumber: contactNumber,
                contactEmail: contactEmail
            });

            console.log('owner created');
            navigate('/');
        }catch (err){
            console.error('something happen' ,err);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div>
            <Navbar isAddProd={ false } isAddOwner={ false }/>
            <div className={'container'}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Brand Name"
                        name="brandName"
                        className={'form-item'}
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your brand name!',
                            },
                        ]}
                    >
                        <Input placeholder={'Enter brand name'} value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="location"
                        className={'form-item'}
                        name="location"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your product location!',
                            },
                        ]}
                    >
                        <Input placeholder={'Enter location'} value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="Contact Number"
                        className={'form-item'}
                        name="contactNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Contact number!',
                            },
                        ]}
                    >
                        <Input placeholder={'Enter contact number'} value={contactNumber}
                               onChange={(e) => setContactNumber(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="Contact Email"
                        className={'form-item'}
                        name="contactEmail"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Contact Number!',
                            },
                        ]}
                    >
                        <Input placeholder={'Enter contact email'} value={contactEmail}
                               onChange={(e) => setContactEmail(e.target.value)}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" className={'custom-button'} htmlType="submit">
                            Add product owner
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ProductOwnerAddScreen;