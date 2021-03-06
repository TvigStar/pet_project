import {Api} from "../api";
import {useDispatch} from "react-redux";
import {CART_DELETE} from "../redux/actions/actionType";

export const Checkout = (props) => {
    const dispatch = useDispatch()
    const handleBuy = async (cartId) => {
        try{
            cartId = props.cartId
            await Api.cart.deleteCart({cartId})
            props.handleClose()
            dispatch({type:CART_DELETE})
        }catch (err){
            console.log(err);
        }


    }
    return (
        <div className='auth_form'>
            <span className='auth_font_1'> BUY FORM</span>
            <div>
                <div className='auth_form_input'>
                    <span className='auth_font_2'>CART NUMBER</span>
                    <input className='auth_input' type="tel"
                           inputMode="numeric"
                           pattern="[0-9\s]{13,19}"
                           autoComplete="cc-number" maxLength="19"
                           placeholder="xxxx xxxx xxxx xxxx"/>
                </div>
                <div className='auth_form_input'>
                    <span className='auth_font_2'>CVV</span>
                    <input className='auth_input'
                           type="number"
                           placeholder="XXX"
                    />
                </div>
                <div className='auth_btn'>
                    <button className='sh_bnt_style btn_radius'
                            onClick={() => handleBuy()}>BUY
                    </button>
                </div>
            </div>
        </div>
    )
}
