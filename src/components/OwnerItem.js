import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Modal } from 'antd';
import { DeleteOutlined, FolderViewOutlined } from '@ant-design/icons';
import axios from "axios";
import '../styles/Owner.css';

const OwnerItem = ({ brandName, location, contactEmail, contactNumber, id, reload }) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const deleteOwner = () => {
        setVisible(true);
    }

    const viewOwner = () => {
        navigate(`/owner/${id}`)
    }

    const handleOk = async () => {
        try{
            await axios.delete(`http://localhost:4000/owner/${id}`);
            setVisible(false);
            reload();
        }catch (err){
            console.error('some thing happen');
        }
    };

    const handleCancel = () => {
        setVisible(false);
    };


    return(
        <div className={'owner-item'}>
            <Modal
                title="Are you sure about deleting owner"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>are you sure about deleting this owner record !!!</p>
            </Modal>

            <Row gutter={16} className={'item'}>
                <Col span={8}>
                    <Card title={<h3 className="card-title">{ brandName }</h3> } style={{ width: 600, marginTop: 16 }} actions={[
                        <FolderViewOutlined className={'icon'} key="view" onClick={ viewOwner }
                                            style={{ fontSize: '24px', color: '#4169E1' }}/>,
                        <DeleteOutlined className={'icon'} key="delete" onClick={ deleteOwner }
                                        style={{ fontSize: '24px', color: '#FF4500' }}/>,
                    ]}>
                        <div>
                            <p className={'card-text'}>Location - { location }</p>
                            <p className={'card-text'}>Email - { contactEmail }</p>
                            <p className={'card-text'}>Number - { contactNumber }</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default OwnerItem;