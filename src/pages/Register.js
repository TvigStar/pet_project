import {useState} from 'react'

import background from '../content/auth.svg'
import {Api} from "../api";
import {NavLink} from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [regSuc, setRegSuc] = useState(false);
    const [error, setError] = useState('')

    const handleRegister = async () => {
        try {
            await Api.register.register({name, email, password})
            setRegSuc(true)

        } catch (err) {
            setError(err.message)
        }
    }

    if (regSuc) {
        return (
            <h1>wellcome</h1>
        )
    }
    return (
        <div>
            <div>
                <img src={background} alt='background' id="bg_auth"/>
            </div>

            <div className='auth_form'>
                <span className='auth_font_1'> REGISTER FORM</span>
                <div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>name</span>
                        <input className='auth_input' defaultValue={name}
                               onBlur={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>email</span>
                        <input className='auth_input'
                               type='email'
                               pattern=".+@globex\.com"
                               defaultValue={email}
                               onBlur={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>password</span>
                        <input className='auth_input'
                               type="password"
                               defaultValue={password}
                               onBlur={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='auth_btn'>
                        <button className='sh_bnt_style btn_radius'
                                onClick={() => handleRegister()}
                        >REGISTER IN
                        </button>
                    </div>
                    <div className='if_login'>
                        Already have account?
                        <NavLink to='/login' className='nav_link_login' >LOGIN</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}