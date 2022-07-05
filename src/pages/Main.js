import mainPic from '../content/main_1 1test.svg'
import {useNavigate} from "react-router";

export const Main = () => {
    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
    };

    return (
        <div className='container-fluid'>
            <img src={mainPic} alt={mainPic}/>
            <span className='main_p_text'>RETURN OF THE STYLE</span>
            <button className='shop_button' title='do it' onClick={navigateToShop}>
                <span className='btn_text'> new collection</span>
            </button>
        </div>
    )
}
