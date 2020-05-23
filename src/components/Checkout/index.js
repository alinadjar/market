import React, { Component } from 'react';
import headerLOGO from '../../images/headerLOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';
import { addToCart } from '../../iRedux/Actions/cart_Actions';

import './checkout.css';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='row' style={{ direction: 'rtl', backgroundColor: '#FFF', marginRight: 0, marginLeft: 0 }}>
                    <img src={headerLOGO} alt="header logo" style={{ width: '230px', maxWidth: '100%' }} alt=''/>
                </div>
                <div className='row' style={{ marginRight: 0, marginLeft: 0 }}>
                    <div className='col-12 col-lg-3' style={{ padding: '10px 4%', textAlign: 'right', fontSize: '0.8rem' }}>
                        <h4>صورتحساب سبد خرید</h4>
                        <table className='table' style={{ direction: 'rtl', border: '1px solid #DDD' }}>
                            <tbody>
                                <tr>
                                    <th>مجموع</th>
                                    <td>{this.props.cartPrice}</td>
                                </tr>
                                <tr>
                                    <td>تخفیف کالا</td>
                                    <th>{this.props.cartDiscount}</th>
                                </tr>
                                <tr>
                                    <td>هزینه ارسال</td>
                                    <th>رایگان</th>
                                </tr>
                                <tr>
                                    <td> <strong>مبلغ قابل پرداخت</strong></td>
                                    <th><strong>{this.props.cartPrice - this.props.cartDiscount}</strong></th>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-success"
                            style={{ width: '100%', fontSize: '0.9rem' }}
                            onClick={() => alert('Register/ Login: Mobile Number')}
                        >ادامه جهت تسویه حساب</button>
                    </div>
                    <div className='col-12 col-lg-9' style={{ padding: '10px 4%', textAlign: 'right' }}>
                        <table className="table table-striped d-none d-md-table" style={{ direction: 'rtl' }}>
                            <thead style={{ textAlign: 'center' }}>
                                <tr className='trHeaderCheckout'>
                                    <th></th>
                                    <th>محصول</th>
                                    <th>قیمت</th>
                                    <th>تعداد</th>
                                    <th>جمع جزء</th>
                                </tr>
                            </thead>
                            <tbody className='checkoutTBody'>
                                {
                                    this.props.cartItems &&
                                    this.props.cartItems.map(c =>
                                        <tr>
                                            <td><img src={require(`../../images/products/${c.product.images[0].imageSrc}`)} style={{ width: '40%', maxWidth: '180px', margin: '0 auto', display: 'block', borderRadius: '50%' }} alt='' /></td>
                                            <td>{c.product.title}</td>
                                            <td className='tdPriceCheckout'>
                                                <div><small style={{ textDecoration: 'line-through' }}>{c.product.price}</small></div>
                                                <div>{c.product.price - c.product.discount}</div>
                                            </td>
                                            {/* <td>{c.quantity}</td> */}
                                            <td>
                                                <div style={{ minWidth: '130px', backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                    <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                        onClick={() => this.props.add(c.product)}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} size='sm' />
                                                    </button>
                                                    <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>{c.quantity}</span>
                                                    <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                        onClick={() => this.props.add(c.product, -1)}
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} size='sm' />
                                                    </button>
                                                </div>
                                            </td>

                                            <td>{c.quantity * (c.product.price - c.product.discount)}</td>
                                        </tr>)
                                }

                            </tbody>
                        </table>

                        <table className="table d-table d-md-none" style={{ direction: 'rtl' }}>
                            <tbody className='' style={{ textAlign: 'center' }}>
                                {
                                    this.props.cartItems &&
                                    this.props.cartItems.map(c =>
                                        <>
                                            <tr>
                                                <th></th>
                                                <td><img src={require(`../../images/products/${c.product.images[0].imageSrc}`)} style={{ width: '40%', maxWidth: '180px', margin: '0 auto', display: 'block', borderRadius: '50%' }} alt=''/></td>
                                            </tr>
                                            <tr>
                                                <th>محصول</th>
                                                <td>{c.product.title}</td>
                                            </tr>
                                            <tr>
                                                <th>قیمت</th>
                                                <td className='tdPriceCheckout'>
                                                    <div><small style={{ textDecoration: 'line-through' }}>{c.product.price}</small></div>
                                                    <div>{c.product.price - c.product.discount}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>تعداد</th>
                                                {/* <td>{c.quantity}</td> */}
                                                <td>
                                                    <div style={{ minWidth: '120px', maxWidth: '50%', margin: '0 auto', backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                            onClick={() => this.props.add(c.product)}
                                                        >
                                                            <FontAwesomeIcon icon={faPlus} size='sm' />
                                                        </button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>{c.quantity}</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}
                                                            onClick={() => this.props.add(c.product, -1)}
                                                        >
                                                            <FontAwesomeIcon icon={faMinus} size='sm' />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>جمع جزء</th>
                                                <td>{c.quantity * (c.product.price - c.product.discount)}</td>
                                            </tr>
                                        </>
                                    )
                                }

                            </tbody>
                        </table>


                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <button className='btn btn-outline-success' style={{ fontSize: '0.rem' }}> اعمال کوپن</button>
                            <input className='form-control' placeholder='کد تخفیف' style={{ width: '30%', textAlign: 'center' }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartPrice: state.cart.cartPrice,
    cartDiscount: state.cart.cartDiscount
})

const mapDispatchToProps = {
    add: addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);