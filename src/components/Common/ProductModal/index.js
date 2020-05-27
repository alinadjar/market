import React, { Component } from 'react';

import './productModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const p = this.props.product;

        return (
            <div className="mymodal bd-example-modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                style={{
                    position: 'fixed',
                    top: 0, right: 0, left: 0,
                    zIndex: 500, backgroundColor: '#00000077', width: '100%', height: '100%'
                }}>
                <div className="modal-dialog  modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={this.props.close}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='row  flex-column-reverse flex-md-row' style={{ margin: 0 }}>
                                <div className='col-12 col-md-6'>
                                    <div className=''>
                                        <h4 style={{ textAlign: 'center', fontSize: '1.2rem' }}>{p.title}</h4>
                                        <b style={{ display: 'flex', flexDirection: 'column' }}>
                                            {parseInt(p.discountRatio) > 0 && <small style={{ textDecoration: 'line-through' }}>{p.price}</small>}
                                            {/* <small style={{ textDecoration: 'line-through' }}>11,875</small> */}
                                            <span style={{
                                                fontFamily: 'inherit',
                                                lineHeight: 1.5,
                                                direction: 'rtl',
                                                color: '#070'
                                            }}>{p.price - p.discount} تومان</span>
                                        </b>
                                        <button type="button" className="btn btn-success"
                                            style={{ margin: '0 auto', display: 'block', fontSize: '0.8rem', marginTop: '10%' }}
                                            onClick={ () => this.props.add2Cart(p) }
                                            >اضافه به سبد خرید  <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6' style={{ display: 'flex', justifyContent: 'space-evenly', position: 'relative' }}>
                                    <img src={require(`../../../images/products/${p.images[0].imageSrc}`)} className='img-responsive' alt='some txt' />
                                    <span className='spanDiscountModal'>تخفیف {p.discountRatio} %</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-dismiss="modal" style={{ fontSize: '0.8rem' }}
                                onClick={this.props.close}
                            >بازگشت</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductModal;