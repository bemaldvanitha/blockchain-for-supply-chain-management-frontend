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
        navigator(`/product/${prodId}/${ownerId}`);
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
            <Card title={ <h3 className="card-title">{ name }</h3> } style={{ width: 600, marginTop: 16 }} actions={[
                <FolderViewOutlined className={'icon'} key="view" onClick={ selectProduct }
                                    style={{ fontSize: '24px', color: '#4169E1' }}/>,
                <DeleteOutlined className={'icon'} key="delete" onClick={ deleteProduct }
                                style={{ fontSize: '24px', color: '#FF4500' }}/>,
            ]}>
                <div>
                    <p className={'card-text'}>Description - { description }</p>
                </div>
            </Card>
        </div>
    )
}

export default ProductItem;