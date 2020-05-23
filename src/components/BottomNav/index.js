import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBarcode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { toggleBasketSidePanel } from '../../iRedux/Actions/common';
import { Link } from "react-router-dom";



class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="row d-xs-inline-block d-sm-none" style={{
                position: 'fixed', bottom: 0, width: '100%',
                // backgroundColor: 'bisque', 
                backgroundImage: 'radial-gradient(circle, #46c35c 0%, #13531f 100%)',
                margin: 0, padding: '.9em 0', zIndex: 200
            }}>
                <div className='col-3 col-md-3 text-center'>
                    <div className='' style={{ cursor: 'pointer' }} onClick={() => this.props.toggleBasketSidePanel()}>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" color='#222' />
                    </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                    <div className='' style={{ cursor: 'pointer' }}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faListUl} size="lg" color='#222' />
                        </Link>
                    </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                    <div className='' style={{ cursor: 'pointer' }}>
                        <Link to='/categories'>
                            <FontAwesomeIcon icon={faHome} size="lg" color='#222' />
                        </Link>
                    </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                    <div className='' style={{ cursor: 'pointer' }} onClick={() => alert('kjh')}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color='#222' />
                    </div>
                </div>
            </nav>
        );
    }
}



const mapDispatchTpProps = {
    toggleBasketSidePanel
}

export default connect(null, mapDispatchTpProps)(BottomNav);