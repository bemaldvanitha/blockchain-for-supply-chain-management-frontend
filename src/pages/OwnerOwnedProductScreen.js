import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Row, Col } from 'antd';

import ProductItem from "../components/ProductItem";

const OwnerOwnedProductScreen = () => {
    const [data, setData] = useState({});
    const [productData, setProductData] = useState([]);
    const { id } = useParams();
    //console.log(id)

    async function fetchData() {
        const response = await axios.get(`http://localhost:4000/owner/${id}`);
        const ownerData = response.data.owner;
        setData(ownerData);

        const response2 = await axios.get(`http://localhost:4000/product/product-owner/${id}`);
        const prodData = response2.data.prodList;
        //console.log(prodData)
        setProductData(prodData);
    }

    const reloadData = async () => {
        await fetchData();
    }

    //console.log(productData)

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <Row gutter={16}>
            <Col span={12}>
                <h1>Owner Detail</h1>
                <div>
                    <p>Brand - { data.brandName }</p>
                    <p>Email - { data.contactEmail }</p>
                    <p>Location - { data.location }</p>
                    <p>Number - { data.contactNumber }</p>
                </div>
            </Col>
            <Col span={12}>
                <h1>Products</h1>
                { productData.map(product => {
                    //console.log(product)
                    if(product !== null) {
                        return (
                            <ProductItem key={product._id} prodId={product._id} name={product.name}
                                         description={'blah blah blah'} ownerId={id} reload={reloadData}/>
                        )
                    }
                })}
            </Col>
        </Row>
    )
}

export default OwnerOwnedProductScreen;