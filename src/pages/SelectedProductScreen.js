import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Button, Col, Row, Alert } from 'antd';

import BlockInfo from "../components/BlockInfo";
import ProductAddedInfo from "../components/ProductAddedInfo";
import '../styles/BlockInfo.css';
import Navbar from "../components/Navbar";

const SelectedProductScreen = () => {
    const [data, setData] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertLocation ,setAlertLocation] = useState('');
    const { id, own_id } = useParams();

    async function fetchData() {
        const response = await axios.get(`http://localhost:4000/product/${id}`);
        const productData = response.data.product;
        setData(productData);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const printQr = async () => {
        try{
            const response = await axios.post(`http://localhost:4000/qr/`,{
                productId: data.productId,
                productOwnerId: own_id
            });

            const { msg, location } = response.data;
            setShowAlert(true);
            setAlertLocation(location);

        }catch (err){
            console.error('Something happen!')
        }
    }

    return(
        <div>
            <Navbar isAddProd={ false } isAddOwner={ false }/>
            <Row>
                <Col offset={10}>
                    <div className={'btn-container'}>
                        <Button onClick={ printQr } type={'primary'}>Print Qr</Button>
                    </div>
                </Col>
            </Row>
            {showAlert && <Row>
                <Col offset={6}>
                    <Alert message={`Qr code generated and saved on ${alertLocation} location`} type={'success'}
                           onClick={() => setShowAlert(false)} className={'alertMsg'}/>
                </Col>
            </Row>}
            <Row>
                <Col span={10}>
                    <div className={'block-info'}>
                        <h1 className={'block-title'}>{ data.name }</h1>
                        { data.blockchain !== undefined && data.blockchain.slice(1).map(block => {
                            return(
                                <BlockInfo block={ block.data } key={ JSON.stringify(block.data) }/>
                            )
                        }) }
                    </div>
                </Col>
                <Col span={14}>
                    <ProductAddedInfo id={id}/>
                </Col>
            </Row>
        </div>
    )
}

export default SelectedProductScreen;