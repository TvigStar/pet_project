import product from "../content/product1.jpg";
import {useEffect, useState} from "react";
import {Rings} from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {CART_REQUEST, CART_REQUEST_SUCCESS} from "../redux/actions/actionType";
import {Checkout} from "../components/Checkout";
import {Api} from "../api";


export const Cart = () => {
    const dispatch = useDispatch()
    const {
        cartLoading,
        cartFetched,
        cart
    } = useSelector(({cart}) => cart)
    const [checkoutStatus, setCheckoutStatus] = useState(false)
    const [updateLoading, setUpdateLoading] = useState(false)
    const cartId = cart?._id
    const handleCheckout = () => {
        setCheckoutStatus(true)
    }

    useEffect(() => {
        if (!cartFetched && !cartLoading) {
            dispatch({type: CART_REQUEST})
        }
    }, [])

    const handleReduceCount = async (productId) => {
        try {
            setUpdateLoading(true)
            const {data} = await Api.cart.deleteProductFromCart({productId, count: 1})
            dispatch({type: CART_REQUEST_SUCCESS, payload: data})
        } catch (err) {
            console.log(err);
        }
        setUpdateLoading(false);
    }

    const handleIncreaseCount = async (productId) => {
        try {
            setUpdateLoading(true)
            const {data} = await Api.cart.addToCart({productId, count: 1})
            dispatch({type: CART_REQUEST_SUCCESS, payload: data})
        } catch (err) {
            console.log(err)
        }
        setUpdateLoading(false);
    }

    if (cartLoading || !cartFetched) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Rings color="#00BFFF" height={80} width={80}/>
            </div>
        )
    }

    if (checkoutStatus) {
        return (
            <Checkout cartId={cartId} handleClose={() => {
                setCheckoutStatus(false)
            }}/>
        )
    }


    return (
        <>
            <div>
                <div className='cart_top cart_font_1'>
                    <span className='max_w'> ITEM</span>
                    <span className='max_w'> QTY</span>
                    <span className='max_w'> SUBTOTAL</span>
                </div>
                <hr/>

                {cart ? cart.products.map(value => (
                        <div className='cart_top' key={value.productId._id}>
                            <div className='cart_1  max_w'>
                                <div><img src={product} alt={product}/></div>
                                <div className='max_w'>
                                    <span className='cart_font_2'>{value.productId.title}</span>
                                    <hr/>
                                    <span className='cart_font_3'>{value.productId.price}</span>
                                </div>
                            </div>
                            <div className="number">
                                <button className="minus"
                                        onClick={()=> handleReduceCount(value.productId._id)}
                                        disabled={updateLoading}
                                >-</button>
                                <input className='cart-qv' type="text" value={value.count}/>
                                <button className="plus"
                                onClick={()=> handleIncreaseCount(value.productId._id)}>+</button>
                            </div>
                            <span className='max_w cart_font_4 cart-sum'> {value.count * value.price}</span>
                        </div>
                    ))
                    :
                    <div>empty cart</div>
                }

                <hr/>


                <div className='buy_div'>
                    <div>
                        <div className='buy_div_1'>
                            <span className="cart_font_5"> ESTIMATED TOTAL: </span>
                            <span className="cart_font_6"> {cart ? cart.sum : '00000'}</span>
                        </div>
                        <div className='buy_btn '>
                            <button className='bnt_style' onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
