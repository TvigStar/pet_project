import {useState} from "react";
import {toast} from "react-toastify";
import {Api} from "../api";


export const ProductCreate = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [stockCount, setStockCount] = useState(0)
    const [price, setPrice] = useState(0)

    const handleCreator = async () => {
        try {
            await Api.product.create({title, stockCount, type, description, price})
            props.handleClose()
        }catch (err){
            toast(err)
        }
    }

    return(
        <div>
            <div className='auth_form'>
                <span className='auth_font_1'> CREATE PRODUCT</span>
                <div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>title</span>
                        <input className='auth_input'
                               defaultValue={title}
                               onBlur={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>description</span>
                        <input className='auth_input'
                               defaultValue={description}
                               onBlur={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>type</span>
                        <input className='auth_input'
                               defaultValue={type}
                               onBlur={(e) => setType(e.target.value)} />
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>stock count</span>
                        <input className='auth_input'
                               defaultValue={stockCount}
                               onBlur={(e) => setStockCount(e.target.value)}/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>price</span>
                        <input className='auth_input'
                               defaultValue={price}
                               onBlur={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className='auth_btn'>
                        <button className='sh_bnt_style btn_radius' onClick={()=> handleCreator()}
                        >CREATE PRODUCT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}