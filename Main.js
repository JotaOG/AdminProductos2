import React, { useState, useEffect } from 'react';
import { ProductForm } from '../Components/ProductForm';
import { ProductList } from '../Components/ProductList';
import axios from 'axios';

export const Main = () => {
    const [ products, setProducts ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <ProductForm /><hr/>
            {loaded && <ProductList products={products}/>}
        </div>
    );
}
