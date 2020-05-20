import React, { Component } from 'react';

class ProductBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {

        const p = this.props.product;
        console.log(p);
        // debugger;

        return (
            <div style={{ marginTop: '50px' }}>
                <div className='mmm'>
                    <span>
                        <button style={{ background: 'none', border: 'none', }} 
                        onClick={ () => this.props.add2Cart(p) }
                        >
                            <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                        </button>
                    </span>
                    <a href='/' style={{ textDecoration: 'none' }}>
                        <div>
                            <img src={require(`../../images/products/${p.images[0].imageSrc}`)} className='img-responsive' />
                            <span className='spanDiscount'>تخفیف {p.discountRatio} %</span>
                        </div>
                        <div className='bWrapper'>
                            <b>
                                <span style={{
                                    fontFamily: 'inherit',
                                    lineHeight: 1.5
                                }}>{p.price-p.discount} تومان</span>
                                {parseInt(p.discountRatio) > 0 && <small>{p.price}</small> }
                                {/* <small>11,875</small> */}
                            </b>
                            <h4>{p.title}</h4>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default ProductBox;