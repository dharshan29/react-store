import React, { useState } from 'react'
import Product from './Product'
import Title from './Title'
import { useGlobalContext} from '../context';

function ProductList() {
    const {product} = useGlobalContext();
    
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"></Title>
                    <div className="row">
                            {product.map(products => {
                                    return <Product key={products.id} product={products}/>
                                })
                            }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductList
