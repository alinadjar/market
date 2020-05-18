import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBarcode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'



class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="row d-xs-inline-block d-sm-none" style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'bisque', margin: 0, padding: '.9em 0', zIndex: 200 }}>
                <div className='col-3 col-md-3 text-center'>
                    <div className=''>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                    <div className=''>
                        <FontAwesomeIcon icon={faListUl} size="lg" />
                    </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                    <div className=''>
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                    <div className=''>
                        <a href='/'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default BottomNav;