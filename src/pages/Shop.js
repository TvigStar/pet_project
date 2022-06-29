import product from '../content/product1.jpg'

export const Shop = () => {
    return (
        <div className='container'>
            <div className='product_main'>
                <div className='product_up'>
                    <img src={product} alt={product}/>
                </div>
                <div className='product_down'>
                    <span>Title: title</span>
                    <br/>
                    <span>Price: price</span>
                </div>
                <div>
                    <button> buy</button>
                </div>
            </div>
        </div>
    )
}