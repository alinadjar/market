import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slide1 from './images/slide1.png';
import headerLOGO from './images/headerLOGO.png';

import Pace from 'react-pace-progress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faPhoneAlt, faMailBulk, faBarcode, faEnvelope, faEnvelopeSquare, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startupBlinking: true
    }
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ startupBlinking: !this.state.startupBlinking });
    }, 50) // 5150
  }

  render() {

    let content;
    if (this.state.startupBlinking) {
      content = (
        <>
          <Pace style={{ position: 'fixed', top: 0, left: 0 }} height={5} color='#d90912' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <img className='blinking' src={headerLOGO} alt="header logo" style={{ width: '40%', maxWidth: '100%' }} />
          </div>
        </>
      );
    }
    else {
      content = (
        <div>
          <header style={{ backgroundColor: 'bisque', position: 'fixed', width: '100%', top: 0, left: 0, right: 0, zIndex: 100, }} >
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
                            }} >Q</button>
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
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                  <button type="button" className="btn btn-success col-xs-6" style={{ marginRight: '0.4em' }} >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span style={{ padding: '0.2em' }}>سبدخرید</span>
                  </button>
                  <button type="button" className="btn btn-outline-success col-xs-6">
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


          <div style={{ width: '100%', margin: '0 auto', marginTop: '180px', paddingTop: '20px' }}>


            <div className='row' style={{ margin: '1.5rem auto' }}>

              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/shirini.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>شیرینی جات</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/behdashti.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>بهداشتی</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/kharobar.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>خواربار</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/canned.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>کنسرو جات</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/tanagholat.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>تنقلات</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/chashni.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>چاشنی و افزودنی</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/shirini.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>شیرینی جات</h3>
                </a>
              </div>
              <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
                <a style={{
                  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
                  backgroundColor: '#FFF'
                }}>
                  <span style={{ width: '50%', flexBasis: '35%' }}>
                    <img src={require('./images/Categories/shirini.jpg')}
                      style={{ width: '100%', height: 'auto' }}
                      className='img-fluid'
                    />
                  </span>
                  <h3 style={{ fontSize: '.8em' }}>شیرینی جات</h3>
                </a>
              </div>

            </div>
            <div className='row' style={{direction:'rtl', margin: 0}}>
              <div className='col-md-4 col-sm-12'>
                <img className='rounded img-fluid' src={require('./images/Mayonaise2.jpg')}
                      style={{  height: '300px'}} />
              </div>
              <div className='col-md-8 col-sm-12'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Slide1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Slide1} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Slide1} alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>  
              </div>
            </div>
            <div className='row' style={{ margin: 0 }}>
              <form className='p-5'>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

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

          </div>


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
                    <img className='img-fluid' src={require('./images/verifyLogo/union.png')} />
                  </div>
                  <div className='col-4'>
                    <img className='img-fluid' src={require('./images/verifyLogo/enamad.png')} />
                  </div>
                  <div className='col-4'>
                    <img className='img-fluid' src={require('./images/verifyLogo/rasaneh.png')} />
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


    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
