import product from "../content/product1.jpg";
import {useEffect, useState} from "react";
import {Rings} from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {CART_REQUEST} from "../redux/actions/actionType";
import {Checkout} from "../components/Checkout";


export const Cart = () => {
    const {
        cartLoading,
        cartFetched,
        cart
    } = useSelector(({cart}) => cart)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!cartFetched && !cartLoading) {
            dispatch({type: CART_REQUEST})
        }
    }, [])
    const cartId = cart._id
    const [checkoutStatus, setCheckoutStatus] = useState(false)
    const handleCheckout = () => {
        setCheckoutStatus(true)
    }

    if (cartLoading || !cartFetched) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Rings color="#00BFFF" height={80} width={80}/>
            </div>
        )
    }

    if (checkoutStatus){
        return (
            <Checkout cartId={cartId} handleClose ={() => {
                setCheckoutStatus(false)
            }} />
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

                {cart.products.map(value => (
                    <div className='cart_top'>
                        <div className='cart_1  max_w'>
                            <div><img src={product} alt={product}/></div>
                            <div className='max_w'>
                                <span className='cart_font_2'>{value.productId.title}</span>
                                <hr/>
                                <span className='cart_font_3'>{value.productId.price}</span>
                            </div>
                        </div>
                        <span className='max_w cart_font_4'> {value.count}</span>
                        <span className='max_w cart_font_4'> {value.count * value.price}</span>
                    </div>
                ))}

                <hr/>


                <div className='buy_div'>
                    <div>
                        <div className='buy_div_1'>
                            <span className="cart_font_5"> SUBTOTAL: </span>
                            <span className="cart_font_6"> NUMBER</span>
                        </div>
                        <div className='buy_div_1'>
                            <span className="cart_font_5"> DISCOUNT: </span>
                            <span className="cart_font_6"> NUMBER</span>
                        </div>
                        <div className='buy_div_1'>
                            <span className="cart_font_5"> ESTIMATED TOTAL: </span>
                            <span className="cart_font_6"> NUMBER</span>
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
