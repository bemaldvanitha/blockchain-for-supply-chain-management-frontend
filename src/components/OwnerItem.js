import React, { useState } from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';
import { DeleteOutlined, FolderViewOutlined } from '@ant-design/icons';
import axios from "axios";

const OwnerItem = ({ brandName, location, contactEmail, contactNumber, id, reload }) => {
    const [visible, setVisible] = useState(false);

    const deleteOwner = () => {
        setVisible(true);
    }

    const viewOwner = () => {
        console.log('view')
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
        <div>

            <Modal
                title="Are you sure about deleting owner"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>are you sure about deleting this owner record !!!</p>
            </Modal>

            <Row gutter={16}>
            <Col span={8}>
                <Card title={ brandName } style={{ width: 600, marginTop: 16 }} actions={[
                    <FolderViewOutlined key="view" onClick={ viewOwner }/>,
                    <DeleteOutlined key="delete" onClick={ deleteOwner }/>,
                ]}>
                    <div>
                        <p>Location - { location }</p>
                        <p>Email - { contactEmail }</p>
                        <p>Number - { contactNumber }</p>
                    </div>
                </Card>
            </Col>
        </Row>
        </div>
    )
}

export default OwnerItem;