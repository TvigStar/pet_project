import background from '../content/auth.svg'
import {useDispatch} from "react-redux";
import {useState} from "react";

export const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch({type: "SIGN_IN", payload: {email, password}})
    }
    // useSelector

    return(
        <div>
            <div>
                <img src={background} alt='background' id="bg_auth" />
            </div>

            <div className='auth_form'>
                <span className='auth_font_1'> LOGIN FORM</span>
                <div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>email</span>
                        <input className='auth_input' defaultValue={email} onBlur={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>password</span>
                        <input className='auth_input' defaultValue={password} onBlur={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='auth_btn'>
                    <button className='sh_bnt_style btn_radius' onClick={() => handleLogin()}>LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}