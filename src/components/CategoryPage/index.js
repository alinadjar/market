
import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BottomNav from '../BottomNav';


import './categoryPage.css';


class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const catID = this.props.match.params.catID;


        return (
            <div style={{backgroundColor:'#DDD'}}>
                <Header />
                <div className='row' style={{ margin: 0, marginTop: '160px',  }}>
                    <div className='col-12 col-md-10' style={{ backgroundColor:'#FFF'}}>
                        <div className='row'>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/9.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/8.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/7.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/6.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/5.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/4.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/3.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/2.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/1.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/9.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className='productCapsule ' style={{ marginTop: '50px' }}>
                                    <div className='catp74'>
                                        <span>
                                            <button style={{ background: 'none', border: 'none', }}>
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>+</span>
                                            </button>
                                        </span>
                                        <a href='/' style={{ textDecoration: 'none' }}>
                                            <div>
                                                <img src={require('../../images/products/9.jpg')} className='img-responsive' />
                                                <span className='spanDiscount'>تخفیف 14 %</span>
                                            </div>
                                            <div className='bWrapper'>
                                                <b>
                                                    <span style={{
                                                        fontFamily: 'inherit',
                                                        lineHeight: 1.5
                                                    }}>10,212 تومان</span>
                                                    <small>11,875</small>
                                                </b>
                                                <h4>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-12 col-md-2' style={{ backgroundColor: '#DDD' }}>
                        <h4 style={{ textAlign: 'right', paddingTop: '20px', fontSize: '1.3rem'}}>دسته بندی ها</h4>
                    </div>
                </div>
                <BottomNav />
                <Footer />

            </div>
        );
    }
}

export default CategoryPage;