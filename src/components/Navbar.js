import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import '../styles/Navbar.css';

const Navbar = ({ isAddProd, isAddOwner, ownerId = '' }) => {
    return(
        <div>
            <div className={'header'}>
                <Row className={'header-items'}>
                    <Col span={2}>

                    </Col>
                    <Col span={4} >
                        <Link to={'/'}>
                            <h1 style={{color:'white'}} className={'title'}>Blockchain </h1>
                        </Link>
                    </Col>
                    <Col span={17}>
                        {isAddProd && <Link to={`/add-product/${ownerId}`}>
                            <Button className={'add-product-button'}>
                                Add your product
                            </Button>
                        </Link>}
                        {isAddOwner && <Link to={'/add-owner'}>
                            <Button className={'add-product-button'}>
                                Add new Owner
                            </Button>
                        </Link>}
                    </Col>
                    <Col span={1}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Navbar;