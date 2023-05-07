import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Col, Row } from 'antd';

import BlockInfo from "../components/BlockInfo";
import ProductAddedInfo from "../components/ProductAddedInfo";
import '../styles/BlockInfo.css';
import Navbar from "../components/Navbar";

const SelectedProductScreen = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    async function fetchData() {
        const response = await axios.get(`http://localhost:4000/product/${id}`);
        const productData = response.data.product;
        setData(productData);
    }

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <div>
            <Navbar isAddProd={ false } isAddOwner={ false }/>
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