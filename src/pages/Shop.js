import product from '../content/product1.jpg'
import {useState} from "react";
import {ProductCreate} from "../components";

export const Shop = () => {
    const [newProduct, setNewProduct] = useState(false)
    const handleNewProduct = () => {
        setNewProduct(true)
    }

    if (newProduct) {
        return (
                <ProductCreate handleClose={()=>{setNewProduct(false)}} />
        )
    }
    return (
        <div className='container'>
            <div>
                <button className='sh_bnt_style' onClick={handleNewProduct}> create product</button>
            </div>

            <div className='product_main'>
                <div className='product_up'>
                    <img src={product} alt={product}/>
                </div>
                <div className='product_down'>
                    <span>Title: title</span>
                    <br/>
                    <span>Price: price</span>
                </div>
                <div>
                    <button> buy</button>
                </div>
            </div>
        </div>
    )
}