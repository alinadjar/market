import React, { Component } from 'react';

import toastr from 'toastr/toastr'

class ProductBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {

        const p = this.props.product;
        // console.log(p);
        // debugger;

        return (
            <div style={{ marginTop: '50px' }} onClick={ () => { this.props.boxClick(p)}}>
                <div className='mmm'>
                    <span>
                        <button style={{ background: 'none', border: 'none', }} 
                        onClick={ (e) => { 
                            e.stopPropagation();
                            this.props.add2Cart(p);
                            toastr.info('Are you the 6 fingered man?')
                        } }
                        >
                            <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                        </button>
                    </span>
                    <div style={{ textDecoration: 'none' }}>
                        <div>
                            <img src={require(`../../images/products/${p.images[0].imageSrc}`)} className='img-responsive' alt='some txt' />
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductBox;