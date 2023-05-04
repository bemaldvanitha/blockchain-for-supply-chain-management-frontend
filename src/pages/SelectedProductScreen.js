import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Col, Row } from 'antd';

import BlockInfo from "../components/BlockInfo";
import ProductAddedInfo from "../components/ProductAddedInfo";

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
            <Row>
                <Col span={10}>
                    <h1>{ data.name }</h1>
                    { data.blockchain !== undefined && data.blockchain.map(block => {
                        return(
                            <BlockInfo block={ block.data }/>
                        )
                    }) }
                </Col>
                <Col span={14}>
                    <ProductAddedInfo id={id}/>
                </Col>
            </Row>
        </div>
    )
}

export default SelectedProductScreen;