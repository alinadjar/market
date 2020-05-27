import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from './iRedux/Actions/shop_Actions';
import { DataTypes } from './iRedux/Actions/types';


// import logo from './logo.svg';
import './App.css';

import Slide1 from './images/slide1.jpg';
import Slide2 from './images/slide2.jpg';
import headerLOGO from './images/headerLOGO.png';

import Pace from 'react-pace-progress'





// import 'jquery';
// import 'popper.js/dist/popper';
// import 'bootstrap/dist/js/bootstrap';
// import $ from 'jquery';
// import Popper from 'popper.js';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Heading from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import CategoryBoxes from './components/CategoryBoxes';
import Banner from './components/Banner';
import BottomNav from './components/BottomNav';


// import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startupBlinking: true
    }
  }


  componentDidMount() {

    this.props.loadData(DataTypes.PRODUCTS);
    this.props.loadData(DataTypes.CATEGORIES);
    
    

    setTimeout(() => {
      this.setState({ startupBlinking: !this.state.startupBlinking });
    }, 51) // 5150
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

          <Heading />

          <div style={{ width: '100%', margin: '0 auto', marginTop: '180px', paddingTop: '20px' }}>



            {/* Categories */}
            <CategoryBoxes />

            {/* Banner */}
            <Banner picAddr={'CrossBanners/crossBanner2.jpg'} alt={'سبدتو پر کن'} />


            {/* Slider */}
            <div className='row' style={{ direction: 'rtl', margin: 0, height: '250px', overflow: 'hidden' }}>
              <div className='col-md-4 d-none d-md-block' style={{ height: '100%' }}>
                <img className='rounded img-fluid' src={require('./images/Mayonaise2.jpg')}
                  style={{ height: '300px', margin: '0 auto', display: 'block' }}  alt=''/>
              </div>
              <div className='col-md-8 col-sm-12' style={{ height: '100%' }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-interval="2000" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Slide1} alt="First slide" style={{ width: '100%', maxHeight: '30%' }} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Slide2} alt="Second slide" style={{ width: '100%', maxHeight: '30%' }} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Slide1} alt="Third slide" style={{ width: '100%', maxHeight: '30%' }} />
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


            {/* 4Scroll */}
            <div className='container-fluid' style={{ margin: '20px auto' }}>
              <OwlCarousel items={4}
                className="owl-theme"
                loop
                nav={true}
                rewind={true}
                dots={false}
                slideBy={1}
                autoplay={false}
                smartSpeed={500}
                margin={30} >
                <div><img className="img rounded" src={require('./images/4Scroll/1.jpg')} alt='some txt'/></div>
                <div><img className="img rounded" src={require('./images/4Scroll/2.jpg')} alt='some txt'/></div>
                <div><img className="img rounded" src={require('./images/4Scroll/3.jpg')} alt='some txt'/></div>
                <div><img className="img rounded" src={require('./images/4Scroll/4.jpg')} alt='some txt'/></div>
              </OwlCarousel>
            </div>


            {/* Banner */}
            <Banner picAddr={'CrossBanners/crossBanner1.jpg'} alt={'سبدتو پر کن'} />


            {/* 3Scroll */}
            <div className='container-fluid' style={{ margin: '20px auto' }}>
              <OwlCarousel items={3}
                className="owl-theme"
                loop
                nav={true}
                rewind={true}
                dots={false}
                slideBy={1}
                autoplay={false}
                smartSpeed={500}
                margin={30} >
                <div><img className="img rounded" src={require('./images/3Scroll/1.jpg')}alt=''/></div>
                <div><img className="img rounded" src={require('./images/3Scroll/2.jpg')} alt=''/></div>
                <div><img className="img rounded" src={require('./images/3Scroll/3.jpg')} alt=''/></div>
              </OwlCarousel>
            </div>



            {/* Nav Bottom */}
            <BottomNav />

          </div>



          <Landing />
          <Footer />

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

const mapDispatchToProps = {
  loadData
}

export default connect(null, mapDispatchToProps)(App);
