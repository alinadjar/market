import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBarcode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* Footer Content */}
                <div style={{ borderTop: '2px solid #bbb', width: '100%', margin: '0 auto' }}></div>
                <footer style={{ marginTop: '2rem' }}>
                    <div className='row' style={{ direction: 'rtl', margin: 0 }}>
                        <div className='col-12 col-sm-6' style={{ height: '200px' }}>
                            <ul style={{ listStyle: 'none', textAlign: 'right', fontSize: '1rem' }}>
                                <li>تماس با ما</li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>آدرس: مشهد، بهارستان 18</span>
                                </li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faPhone} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>تلفن: 37501-051</span>
                                </li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faEnvelope} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>ایمیل: info@tabarok.ir</span>
                                </li>
                                <li>
                                    <span> <FontAwesomeIcon icon={faBarcode} size="sm" /> </span>
                                    <span style={{ paddingRight: '1rem' }}>کدپستی: 91677</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-3' style={{ height: '200px' }}>
                            <div className='row'>
                                <div className='col-12'>
                                    <ul style={{ listStyle: 'none', textAlign: 'right' }}>
                                        <li>درباره ما</li>
                                        <li>سوالات متداول</li>
                                        <li>ثبت شکایات</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-3' style={{ height: '200px' }}>
                            <div className='row'>
                                <div className='col-4'>
                                    <img className='img-fluid' src={require('../../images/verifyLogo/union.png')} />
                                </div>
                                <div className='col-4'>
                                    <img className='img-fluid' src={require('../../images/verifyLogo/enamad.png')} />
                                </div>
                                <div className='col-4'>
                                    <img className='img-fluid' src={require('../../images/verifyLogo/rasaneh.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div style={{ borderTop: '2px solid #bbb', width: '80%', margin: '0 auto' }}></div>
                <p style={{ textAlign: 'center', fontSize: '.8rem', marginTop: '.5rem' }}>&copy;Copyright 2020 - Tabarok Industrial Group Co.</p>
            </div>
        );
    }
}

export default Footer;