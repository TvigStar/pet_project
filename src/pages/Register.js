import background from '../content/auth.svg'
export const Register = () => {
    return(
        <div>
            <div>
                <img src={background} alt='background' id="bg_auth" />
            </div>

            <div className='auth_form'>
                <span className='auth_font_1'> REGISTER FORM</span>
                <div>
                    <div className='auth_form_input'>
                    <span className='auth_font_2'>name</span>
                    <input className='auth_input'/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>email</span>
                        <input className='auth_input'/>
                    </div>
                    <div className='auth_form_input'>
                        <span className='auth_font_2'>password</span>
                        <input className='auth_input'/>
                    </div>
                </div>
            </div>
        </div>
    )
}