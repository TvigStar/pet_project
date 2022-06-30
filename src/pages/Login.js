import background from '../content/auth.svg'
export const Login = () => {
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
                        <input className='auth_input'/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>password</span>
                        <input className='auth_input'/>
                    </div>
                    <div className='auth_btn'>
                    <button className='sh_bnt_style btn_radius' >LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}