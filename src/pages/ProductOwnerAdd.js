import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";

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

    const onFinish = async (values) => {
        try{
            await axios.post('http://localhost:4000/owner',{
                brandName: brandName,
                location: location,
                contactNumber: contactNumber,
                contactEmail: contactEmail
            });

            console.log('owner created');
        }catch (err){
            console.error('something happen' ,err);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div>
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
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your brand name!',
                        },
                    ]}
                >
                    <Input value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="location"
                    name="location"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your product location!',
                        },
                    ]}
                >
                    <Input value={location} onChange={(e) => setLocation(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Contact Number"
                    name="contactNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Contact number!',
                        },
                    ]}
                >
                    <Input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Contact Email"
                    name="contactEmail"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Contact Number!',
                        },
                    ]}
                >
                    <Input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProductOwnerAddScreen;