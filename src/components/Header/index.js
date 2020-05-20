import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

import headerLOGO from '../../images/headerLOGO.png';


import { connect } from 'react-redux';
import { toggleLoadingState, toggleBasketSidePanel } from '../../iRedux/Actions/common';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header style={{
                backgroundColor: 'bisque', position: 'fixed', width: '100%', top: 0, left: 0, right: 0, zIndex: 100,
                boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.2)'
            }} >
                <div className="row flex-column-reverse flex-lg-row" style={{ margin: 0 }}>
                    {/* <div className="container-fluid"> */}
                    <div className="col-lg-9 col-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                        <img className='d-none d-lg-block' src={headerLOGO} alt="header logo" style={{ width: '180px', maxWidth: '100%' }} />
                        <div className='col-lg-9'>
                            <form style={{ width: '100%', margin: '0 auto' }}>
                                <div className="">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <button className="input-group-text" type="submit"
                                                style={{
                                                    backgroundColor: '#28a745',
                                                    borderWidth: '1px 1px 1px',
                                                    borderStyle: 'solid none solid solid',
                                                    borderRight: 'none',
                                                    borderColor: '#28a745',
                                                    color: '#FFF'
                                                }}
                                            >Q</button>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="search kala..."
                                            style={{ borderColor: '#28a745' }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img className='d-block d-lg-none' src={headerLOGO} alt="header logo" style={{ width: '150px', maxWidth: '100%', alignItems: 'left' }} />
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', direction: 'rtl' }}>
                            <button type="button" className="btn btn-success col-xs-6" style={{ direction: 'rtl', position: 'relative' }}                                
                                onClick={() => this.props.toggleBasketSidePanel()}
                            >
                                <span className="badge badge-danger" style={{ position: 'absolute', top: '-10px', right: '-8px', fontSize: '0.9rem', borderRadius: '50%' }}>{this.props.cartItems}</span>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span style={{ padding: '0.2em' }}>سبدخرید</span>
                            </button>
                            <button type="button" className="btn btn-outline-success col-xs-6" style={{ marginRight: '0.4em', }}
                               onClick={() => this.props.toggleLoading()}
                            >
                                <FontAwesomeIcon icon={faUserCircle} />
                                <span style={{ padding: '0.2em' }}>ورود/عضویت</span>
                            </button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div>
                    <nav className="row" style={{ margin: 0, padding: '.9em 0' }}>
                        <div className='col-3 col-md-3 text-center'>
                            <div className='d-none d-sm-inline-block'>
                                <span className='d-none d-md-inline-block pr-2'>
                                    صفحه اصلی
                    </span>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            </div>
                        </div>
                        <div className='col-3 col-md-3 text-center'>
                            <div className='d-none d-sm-inline-block'>
                                <span className='d-none d-md-inline-block pr-2'>
                                    صفحه اصلی
            </span>
                                <FontAwesomeIcon icon={faListUl} size="lg" />
                            </div>
                        </div>
                        <div className='col-3 col-md-3 text-center'>
                            <div className='d-none d-sm-inline-block'>
                                <span className='d-none d-md-inline-block pr-2'>
                                    صفحه اصلی
            </span>
                                <FontAwesomeIcon icon={faHome} size="lg" />
                            </div>
                        </div>
                        <div className='col-3 col-md-3 text-center'>
                            <div className='d-none d-sm-inline-block'>
                                <a href='/'>
                                    <span className='d-none d-md-inline-block pr-2'>
                                        صفحه اصلی
              </span>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

const mapStateTpProps = (store) => ({
    cartItems: store.cart.cartItems
})
const mapDispatchToProps = {
    toggleLoading: toggleLoadingState,
    toggleBasketSidePanel
}

export default connect(mapStateTpProps, mapDispatchToProps)(Header);