import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Row, Col } from 'antd';
import '../styles/OwnerOwnedProduct.css';

import ProductItem from "../components/ProductItem";
import Navbar from "../components/Navbar";

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
        <div>
            <Navbar isAddProd={ true } isAddOwner={ false } ownerId={ id }/>
            <Row gutter={16} className={'container-block'}>
                <Col span={12}>
                    <div className={'owner-info'}>
                        <h1 className={'block-title'}>Owner Detail</h1>
                        <div>
                            <p className={'block-text'}>Brand - { data.brandName }</p>
                            <p className={'block-text'}>Email - { data.contactEmail }</p>
                            <p className={'block-text'}>Location - { data.location }</p>
                            <p className={'block-text'}>Number - { data.contactNumber }</p>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <h1>Products</h1>
                    { productData.map(product => {
                        //console.log(product);
                        if(product !== null) {
                            return (
                                <ProductItem key={product._id} prodId={product._id} name={product.name}
                                             description={product.blockchain[1].data.description}
                                             ownerId={id} reload={reloadData}/>
                            )
                        }
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default OwnerOwnedProductScreen;