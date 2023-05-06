import React,{ useState } from "react";
import {Button, Form, Input} from "antd";
import axios from "axios";
import '../styles/AddProduct.css';

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

const AddProductScreen = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const onFinish = async (values) => {
        try{
            console.log(name, description, brand, quantity, price)
            await axios.post('http://localhost:4000/product',{
               name: name,
               description: description,
                brand: brand,
                quantity: quantity,
                price: parseInt(price),
                ownerId: '64507f485dba63558ae55936'
            });
        }catch (err){
            console.error('something happen' ,err);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
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
                    label="name"
                    name="name"
                    className={'form-item'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your product name!',
                        },
                    ]}
                >
                    <Input placeholder={'Enter product name'} value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    className={'form-item'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your description!',
                        },
                    ]}
                >
                    <Input placeholder={'Enter description'}
                           value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Brand"
                    name="brand"
                    className={'form-item'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Brand!',
                        },
                    ]}
                >
                    <Input placeholder={'Enter brand'} value={brand} onChange={(e) => setBrand(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Quantity"
                    name="quantity"
                    className={'form-item'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Product Quantity!',
                        },
                    ]}
                >
                    <Input placeholder={'Enter product quantity'} value={quantity}
                           onChange={(e) => setQuantity(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    className={'form-item'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Product Price!',
                        },
                    ]}
                >
                    <Input placeholder={'Enter product price'} value={price}
                           onChange={(e) => setPrice(e.target.value)}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button className={'custom-button'} type="primary" htmlType="submit">
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductScreen;