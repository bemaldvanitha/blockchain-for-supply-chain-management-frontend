import React from "react";
import { Row, Col, Divider } from 'antd';

import '../styles/BlockInfo.css';

const BlockInfo = ({ block }) => {
    //console.log(block)
    return(
        <div className={'sub-block'}>
            {block.expDate && <Row>
                <Col>
                    <p className={'block-text'}>Expire date - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.expDate }</p>
                </Col>
            </Row> }
            {block.manDate && <Row>
                <Col>
                    <p className={'block-text'}>Manufacture date - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.manDate }</p>
                </Col>
            </Row> }
            {block.storeConditions && <Row>
                <Col>
                    <p className={'block-text'}>Store conditions - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.storeConditions }</p>
                </Col>
            </Row> }
            {block.healthWarnings && <Row>
                <Col>
                    <p className={'block-text'}>Health warnings - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.healthWarnings }</p>
                </Col>
            </Row> }
            {block.sugarContent && <Row>
                <Col>
                    <p className={'block-text'}>Sugar content - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.sugarContent }</p>
                </Col>
            </Row> }
            {block.fatContent && <Row>
                <Col>
                    <p className={'block-text'}>Fat content - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.fatContent }</p>
                </Col>
            </Row> }
            {block.saltContent && <Row>
                <Col>
                    <p className={'block-text'}>Salt content - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.saltContent }</p>
                </Col>
            </Row> }
            {block.qualityCertifications && <Row>
                <Col>
                    <p className={'block-text'}>Quality Certifications - </p>
                </Col>
                <Col>
                    {
                        block.qualityCertifications && block.qualityCertifications.map(certi => (
                            <p className={'block-text'} key={certi}> * { certi }</p>
                        ))
                    }
                </Col>
            </Row>}
            {block.nutritionInfo && <Row>
                <Col>
                    <p className={'block-text'}>Nutrition Info - </p>
                </Col>
                <Col>
                    {
                        block.nutritionInfo && block.nutritionInfo.map(nutri => (
                            <p className={'block-text'} key={nutri}> * { nutri }</p>
                        ))
                    }
                </Col>
            </Row>}
            {block.ingredients && <Row>
                <Col>
                    <p className={'block-text'}>Ingredients Info - </p>
                </Col>
                <Col>
                    {
                        block.ingredients && block.ingredients.map(ingre => (
                            <p className={'block-text'} key={ingre}> * { ingre }</p>
                        ))
                    }
                </Col>
            </Row>}
            {block.alergenInfo && <Row>
                <Col>
                    <p className={'block-text'}>Alergen Information - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.alergenInfo }</p>
                </Col>
            </Row>}
            <Row>
                <Col>
                    <p className={'block-text'}>Artificial Flavorings - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.artificialFlavorings === true ? 'True' : 'False' }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'block-text'}>GMO - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.gmo === true ? 'True' : 'False' }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'block-text'}>Preservation - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.preservation === true ? 'True' : 'False' }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'block-text'}>Vegan - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.vegan === true ? 'True' : 'False' }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'block-text'}>Vegetarian - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.vegetarian === true ? 'True' : 'False' }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={'block-text'}>Halal - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.halal === true ? 'True' : 'False' }</p>
                </Col>
            </Row>
            <Divider/>

            {block.shippingFrom && <Row>
                <Col>
                    <p className={'block-text'}>Shipping From - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.shippingFrom }</p>
                </Col>
            </Row>}
            {block.shippingTo && <Row>
                <Col>
                    <p className={'block-text'}>Shipping To - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.shippingTo }</p>
                </Col>
            </Row>}
            {block.shippingMethod && <Row>
                <Col>
                    <p className={'block-text'}>Shipping Method - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.shippingMethod }</p>
                </Col>
            </Row>}
            {block.shippingDate && <Row>
                <Col>
                    <p className={'block-text'}>Shipping Date - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.shippingDate }</p>
                </Col>
            </Row>}
            {block.batchNum && <Row>
                <Col>
                    <p className={'block-text'}>Batch Number - </p>
                </Col>
                <Col>
                    <p className={'block-text'}>{ block.batchNum }</p>
                </Col>
            </Row>}

            <Divider/>
        </div>
    )
}

export default BlockInfo;