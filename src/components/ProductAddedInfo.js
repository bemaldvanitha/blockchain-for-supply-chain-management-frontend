import React, { useState } from "react";
import { Button, Form, Input, DatePicker, Checkbox } from 'antd';
import axios from "axios";
import moment from 'moment';
import '../styles/ProductAddInfo.css';

const options = [
    { label: 'SLS', value: 'SLS' },
    { label: 'ISO', value: 'ISO' },
    { label: 'CE', value: 'CE' },
    { label: 'FCC', value: 'FCC' }
];

const ProductAddedInfo = ({ id }) => {
    const [expDate, setExpDate] = useState('');
    const [manDate, setManDate] = useState('');
    const [qualityCertifications, setQualityCertifications] = useState([]);
    const [storeConditions, setStoreConditions] = useState('');
    const [healthWarnings, setHealthWarnings] = useState('');
    const [sugarContent, setSugarContent] = useState('');
    const [fatContent, setFatContent] = useState('');
    const [saltContent, setSaltContent] = useState('');
    const [nutritionInfo, setNutritionInfo] = useState(['']); //
    const [ingredients, setIngredients] = useState(['']); //
    const [alergenInfo, setAlergenInfo] = useState('');
    const [artificialFlavorings, setArtificialFlavorings] = useState(false);
    const [gmo, setGmo] = useState(false);
    const [preservation, setPreservation] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [halal, setHalal] = useState(false);

    const saveInformation = async () => {
        try{
            await axios.put(`http://localhost:4000/product/${id}`,{
                expDate: expDate,
                manDate: manDate,
                qualityCertifications: qualityCertifications,
                storeConditions: storeConditions,
                healthWarnings: healthWarnings,
                sugarContent: sugarContent + 'g',
                fatContent: fatContent + 'g',
                saltContent: saltContent + 'g',
                nutritionInfo: nutritionInfo,
                ingredients: ingredients,
                alergenInfo: alergenInfo,
                artificialFlavorings: artificialFlavorings,
                gmo: gmo,
                preservation: preservation,
                vegan: vegan,
                vegetarian: vegetarian,
                halal: halal
            });

            console.log('info added')
        }catch (err){
            console.error('something happen');
        }
    }

    const handleManDateChange = (date, dateString) => {
        setManDate(dateString);
    };

    const handleExpDateChange = (date, dateString) => {
        setExpDate(dateString);
    };

    const handleCheckboxChange = (checkedValues) => {
        setQualityCertifications(checkedValues);
    };

    const handleNutritionChange = (event ,index) => {
        const values = [...nutritionInfo];
        values[index] = event.target.value;
        setNutritionInfo(values);
    }

    const addNutritionField = () => {
        const values = [...nutritionInfo];
        values.push('');
        setNutritionInfo(values)
    }

    const handleIngredientChange = (event ,index) => {
        const values = [...ingredients];
        values[index] = event.target.value;
        setIngredients(values);
    }

    const addIngredientField = () => {
        const values = [...ingredients];
        values.push('');
        setIngredients(values)
    }

    return(
        <div className={'form-container'}>
            <div className={'inputContainer dateContainer'}>
                <DatePicker label="Manufacturing date" onChange={handleManDateChange} defaultValue={moment()} />
            </div>
            <div className={'inputContainer dateContainer'}>
                <DatePicker label="Expiry date" onChange={handleExpDateChange} defaultValue={moment()} />
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox.Group options={options} value={qualityCertifications} onChange={handleCheckboxChange} />
            </div>
            <div className={'inputContainer'}>
                <Input value={storeConditions} onChange={e => setStoreConditions(e.target.value)}
                       placeholder={'enter storage conditions'}/>
            </div>
            <div className={'inputContainer'}>
                <Input value={healthWarnings} onChange={e => setHealthWarnings(e.target.value)}
                       placeholder={'health warnings'}/>
            </div>
            <div className={'inputContainer'}>
                <Input value={sugarContent} onChange={e => setSugarContent(e.target.value)}
                       placeholder={'sugar content per 100g'}/>
            </div>
            <div className={'inputContainer'}>
                <Input value={fatContent} onChange={e => setFatContent(e.target.value)}
                       placeholder={'fat content per 1000g'}/>
            </div>
            <div className={'inputContainer'}>
                <Input value={saltContent} onChange={e => setSaltContent(e.target.value)}
                       placeholder={'salt content per 100g'}/>
            </div>

            <div className={'inputContainer'}>
                <div className={'extraButton'}>
                    <Button className={'button'}  title={'add new nutrition'}
                            onClick={ addNutritionField }>Add new nutrition</Button>
                </div>
                <div>
                    { nutritionInfo.map((value, index) => (
                        <Input value={value} placeholder={'nutrition'}
                               onChange={(event) => handleNutritionChange(event, index)}/>
                    ))}
                </div>
            </div>

            <div className={'inputContainer'}>
                <div className={'extraButton'}>
                    <Button className={'button'} title={'add new ingredient'}
                            onClick={ addIngredientField }>Add new ingredient</Button>
                </div>
                <div>
                    { ingredients.map((value, index) => (
                        <Input value={value} placeholder={'ingredient'}
                               onChange={(event) => handleIngredientChange(event, index)}/>
                    ))}
                </div>
            </div>

            <div className={'inputContainer'}>
                <Input value={alergenInfo} onChange={e => setAlergenInfo(e.target.value)}
                       placeholder={'alergen information of product'}/>
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox checked={artificialFlavorings} onChange={e => setArtificialFlavorings(e.target.checked)}>
                    Artificial flavorings include in product
                </Checkbox>
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox checked={gmo} onChange={e => setGmo(e.target.checked)}>
                    Gmo ingredients include in product
                </Checkbox>
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox checked={preservation} onChange={e => setPreservation(e.target.checked)}>
                    Preservations include in product
                </Checkbox>
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox checked={vegan} onChange={e => setVegan(e.target.checked)}>
                    Is Product vegan friendly
                </Checkbox>
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox checked={vegetarian} onChange={e => setVegetarian(e.target.checked)}>
                    Is Product vegetarian friendly
                </Checkbox>
            </div>
            <div className={'inputContainer checkboxGrp'}>
                <Checkbox checked={halal} onChange={e => setHalal(e.target.checked)}>
                    Is Product halal friendly
                </Checkbox>
            </div>

            <div className={'extraButton'}>
                <Button className={'button2'} onClick={saveInformation}>Save Information</Button>
            </div>
        </div>
    )
}

export default ProductAddedInfo;