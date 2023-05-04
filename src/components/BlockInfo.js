import React from "react";
import { Row, Col } from 'antd';

const BlockInfo = ({ block }) => {
    //console.log(block)
    console.log(block.artificialFlavorings);
    return(
        <div>
            <Row>
                <Col>
                    <p>Expire date - </p>
                </Col>
                <Col>
                    <p>{ block.expDate }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Manufacture date - </p>
                </Col>
                <Col>
                    <p>{ block.manDate }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Store conditions - </p>
                </Col>
                <Col>
                    <p>{ block.storeConditions }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Health warnings - </p>
                </Col>
                <Col>
                    <p>{ block.healthWarnings }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Sugar content - </p>
                </Col>
                <Col>
                    <p>{ block.sugarContent }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Fat content - </p>
                </Col>
                <Col>
                    <p>{ block.fatContent }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Salt content - </p>
                </Col>
                <Col>
                    <p>{ block.saltContent }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Quality Certifications - </p>
                </Col>
                <Col>
                    {
                        block.qualityCertifications && block.qualityCertifications.map(certi => (
                            <p>{ certi }</p>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Nutrition Info - </p>
                </Col>
                <Col>
                    {
                        block.nutritionInfo && block.nutritionInfo.map(nutri => (
                            <p>{ nutri }</p>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Ingredients Info - </p>
                </Col>
                <Col>
                    {
                        block.ingredients && block.ingredients.map(ingre => (
                            <p>{ ingre }</p>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Alergen Information - </p>
                </Col>
                <Col>
                    <p>{ block.alergenInfo }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Artificial Flavorings - </p>
                </Col>
                <Col>
                    <p>{ block.artificialFlavorings && block.artificialFlavorings.toString() }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>GMO - </p>
                </Col>
                <Col>
                    <p>{ block.gmo && block.gmo.toString() }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Preservation - </p>
                </Col>
                <Col>
                    <p>{ block.preservation && block.preservation.toString() }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Vegan - </p>
                </Col>
                <Col>
                    <p>{ block.vegan && block.vegan.toString() }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Vegetarian - </p>
                </Col>
                <Col>
                    <p>{ block.vegetarian && block.vegetarian.toString() }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Halal - </p>
                </Col>
                <Col>
                    <p>{ block.halal && block.halal.toString() }</p>
                </Col>
            </Row>

        </div>
    )
}

export default BlockInfo;