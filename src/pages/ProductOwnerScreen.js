import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Owner.css';

import OwnerItem from "../components/OwnerItem";
import Navbar from "../components/Navbar";

const ProductOwnerScreen = () => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await axios.get('http://localhost:4000/owner');
        const ownerData = response.data.owners;
        setData(ownerData);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const setReloadPage = () => {
        fetchData();
    }

    return(
        <div>
            <Navbar isAddProd={ false } isAddOwner={ true }/>
            { data.map(owner => {
               return(
                   <OwnerItem key={ owner._id } brandName={ owner.brandName } location={ owner.location }
                              contactNumber={ owner.contactNumber } contactEmail={ owner.contactEmail }
                              id={ owner._id } reload = { setReloadPage }/>
               )
            }) }
        </div>
    )
}

export default ProductOwnerScreen;