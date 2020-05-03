import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slide1 from './images/slide1.png';
import headerLOGO from './images/headerLOGO.png';

import Pace from 'react-pace-progress'




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
    }, 6000)
  }

  render() {

    let content;
    if (this.state.startupBlinking) {
      content = (
        <>
          <Pace color="#27ae60" style={{position: 'fixed', top: 0, left: 0}} height={5} color='#d90912' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <img className='blinking' src={headerLOGO} alt="header logo" style={{ width: '40%', maxWidth: '100%' }} />
          </div>
        </>
      );
    }
    else {
      content = (
        <div className="">
          <header>
            <div className="row flex-column-reverse flex-lg-row" style={{ margin: 0 }}>
              {/* <div className="container-fluid"> */}
              <div className="col-lg-9" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                <img className='d-none d-lg-block' src={headerLOGO} alt="header logo" style={{ width: '180px', maxWidth: '100%' }} />
                <form style={{ width: '75%', margin: '0 auto' }}>
                  <div className="">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <button className="input-group-text" type="submit" style={{ backgroundColor: '#28a745', borderColor: '28a745' }} >Q</button>
                      </div>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="search kala..."
                        style={{ borderColor: '#28a745' }} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img className='d-block d-lg-none' src={headerLOGO} alt="header logo" style={{ width: '150px', maxWidth: '100%', alignItems: 'left' }} />
                <div>
                  <button type="button" className="btn btn-success">Success</button>
                  <button type="button" className="btn btn-outline-success">Success</button>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div>
              <nav className="row" style={{ margin: 0 }}>
                <div className='col-3 col-md-3 text-center'>
                  <div>
                    <span className='d-none d-md-inline-block pr-2'>
                      صفحه اصلی
            </span>
                  </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                  <div>
                    <span className='d-none d-md-inline-block pr-2'>
                      صفحه اصلی
            </span>
                  </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                  <div>
                    <span className='d-none d-md-inline-block pr-2'>
                      صفحه اصلی
            </span>
                  </div>
                </div>
                <div className='col-3 col-md-3 text-center'>
                  <div>
                    <a href='/'>
                      <span className='d-none d-md-inline-block pr-2'>
                        صفحه اصلی
              </span>
                      <span className='Icon icon-home'>
                      </span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>


          <label>App page ...</label>
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

          <nav className="row" style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#FDD', margin: 0 }}>
            <div className='col-3 col-md-3 text-center'>
              <div>
                <span className='d-xs-inline-block d-md-none pr-2'>
                  صفحه اصلی
            </span>
              </div>
            </div>
            <div className='col-3 col-md-3 text-center'>
              <div>
                <span className='d-xs-inline-block d-md-none pr-2'>
                  صفحه اصلی
            </span>
              </div>
            </div>
            <div className='col-3 col-md-3 text-center'>
              <div>
                <span className='d-xs-inline-block d-md-none pr-2'>
                  صفحه اصلی
            </span>
              </div>
            </div>
            <div className='col-3 col-md-3 text-center'>
              <div>
                <a href='/'>
                  <span className='d-xs-inline-block d-md-none pr-2'>
                    صفحه اصلی
              </span>
                  <span className='Icon icon-home'>
                  </span>
                </a>
              </div>
            </div>
          </nav>
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
