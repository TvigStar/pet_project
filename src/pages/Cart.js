import product from "../content/product1.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../api";
import { Rings } from "react-loader-spinner";

export const Cart = () => {
    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCard()
    }, [])

    async function getCard() {
        console.log('useEffect');
        try {
            setIsLoading(true)
            const { data } = await Api.cart.getCart()
            setCart(data)
            setIsLoading(false)
        } catch (error) {
            toast(error)
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Rings color="#00BFFF" height={80} width={80}/>
            </div>
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
                <div className='cart_top'>
                    <div className='cart_1  max_w'>
                        <div><img src={product} alt={product}/></div>
                        <div className='max_w'>
                            <span className='cart_font_2'>TITLE</span>
                            <hr/>
                            <span className='cart_font_3'>CATEGORY</span>
                        </div>
                    </div>
                    <span className='max_w cart_font_4'> QTY</span>
                    <span className='max_w cart_font_4'> SUBTOTAL</span>
                </div>
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
                            <button className='bnt_style'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
