import product_1 from '../content/product1.jpg'
import {useEffect, useState} from "react";
import {ProductCreate} from "../components";
import {Api} from "../api";
import {useDispatch} from "react-redux";
import {CART_REQUEST_SUCCESS} from "../redux/actions/actionType";

const Product = ({productValue: value, handleBuy}) => {
    const [count, setCount] = useState(1)
    return(
        <div className='product_main'>
            <div className='product_up'>
                {/*<img src={product} alt={product}/>*/}
            </div>
            <div className='product_down'>
                <span>Title: {value.title}</span>
                <br/>
                <span>Price: {value.price}</span>
                <br/>
                <span>Count: {value.stockCount}</span>
                <br/>
                <input type='range' max={value.count} min={1} value={value.stockCount} onChange={e => setCount(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => handleBuy(value._id, count)}> buy</button>
            </div>
        </div>
    )
}
export const Shop = () => {
    const dispatch = useDispatch()
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

    const handleBuy = async (productId, count) => {
        try{
           const {data} = await Api.cart.addToCart({productId, count})
            dispatch({type: CART_REQUEST_SUCCESS, payload: data})
            await fetchProducst()
        } catch (err){
            console.log(err)
        }
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
                  <Product productValue={value}  handleBuy={handleBuy}/>
                ))}

            </div>
        </>
    )
}