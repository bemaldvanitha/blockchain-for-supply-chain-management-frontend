import React, {useState} from "react";
import { Card, Row, Col, Modal } from 'antd';
import {DeleteOutlined, FolderViewOutlined} from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ name, description, ownerId, prodId, reload }) => {
    const [visible, setVisible] = useState(false);
    const navigator = useNavigate();

    const handleOk = async () => {
        try{
            await axios.delete(`http://localhost:4000/product/${prodId}/${ownerId}`);
            setVisible(false);
            reload();
        }catch (err){
            console.error('some thing happen');
        }
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const deleteProduct = async () => {
        setVisible(true);
    }

    const selectProduct = () => {
        navigator(`/product/${prodId}`);
    }

    return(
        <div>
            <Modal
                title="Are you sure about deleting this product"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>are you sure about deleting this product record !!!</p>
            </Modal>
            <Card title={ name } style={{ width: 600, marginTop: 16 }} actions={[
                <FolderViewOutlined key="view" onClick={ selectProduct }/>,
                <DeleteOutlined key="delete" onClick={ deleteProduct }/>,
            ]}>
                <div>
                    <p>Description - { description }</p>
                </div>
            </Card>
        </div>
    )
}

export default ProductItem;