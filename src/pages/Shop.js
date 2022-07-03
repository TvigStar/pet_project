import product_1 from '../content/product1.jpg'
import {useEffect, useState} from "react";
import {ProductCreate} from "../components";
import {Api} from "../api";

export const Shop = () => {

    const [data, setData] = useState([])
    const fetchProducst = async () => {
        const fetchdata = await Api.product.getAll()
        setData(fetchdata.data)
        console.log(fetchdata)
    }

    useEffect(() => {
        fetchProducst()
    }, [])

    const [newProduct, setNewProduct] = useState(false)
    const handleNewProduct = () => {
        setNewProduct(true)
    }

    if (newProduct) {
        return (
            <ProductCreate handleClose={() => {
                setNewProduct(false)
            }}/>
        )
    }
    return (
        <>
            <div className>
                <button className='sh_bnt_style' onClick={handleNewProduct}> create product</button>
            </div>

            <div className='shop_container'>

                <div className='product_main'>
                    <div className='product_up'>
                        <img src={product_1} alt={product_1}/>
                    </div>
                    <div className='product_down'>
                        <span>Title: Title</span>
                        <br/>
                        <span>Price: price</span>
                    </div>
                    <div>
                        <button> buy</button>
                    </div>
                </div>

                {data.map(value => (
                    <div className='product_main'>
                        <div className='product_up'>
                            {/*<img src={product} alt={product}/>*/}
                        </div>
                        <div className='product_down'>
                            <span>Title: {value.title}</span>
                            <br/>
                            <span>Price: {value.price}</span>
                        </div>
                        <div>
                            <button> buy</button>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}