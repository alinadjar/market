
import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BottomNav from '../BottomNav';
import { Link } from 'react-router-dom';


import './categoryPage.css';


class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOnly_InStock: false
        }
    }

    render() {

        const catID = this.props.match.params.catID;
        const subcatID = this.props.match.params.subcatID;
        // debugger

        const styleRoundSelectorActive = {
            backgroundColor: '#309342',
            width: '2.5rem',
            height: '1.2rem',
            borderRadius: '1rem',
            padding: '0.5rem',
            position: 'relative',
            cursor: 'pointer'
        };

        const styleRoundSelectorPassive = {
            backgroundColor: '#989898',
            width: '2.5rem',
            height: '1.2rem',
            borderRadius: '1rem',
            padding: '0.5rem',
            position: 'relative',
            cursor: 'pointer'
        };


        return (
            <div style={{ backgroundColor: '#DDD' }}>
                <Header />
                <div className='row' style={{ margin: 0, marginTop: '160px', }}>
                    <div className='col-12 col-md-10' style={{ backgroundColor: '#FFF' }}>
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
                                                <img src={require('../../images/products/9.jpg')} className='img-responsive' alt='' />
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
                                                <img src={require('../../images/products/8.jpg')} className='img-responsive' alt='' />
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
                        <h4 style={{ textAlign: 'right', paddingTop: '20px', fontSize: '1.3rem' }}>دسته بندی ها</h4>
                        <ul style={{ listStyle: 'none', textAlign: 'right' }}>
                            <li><Link to='/categories/55/subcat/65487'>نوشابه</Link></li>
                            <li><Link to='/categories/55/subcat/65488'>آب</Link></li>
                            <li><Link to='/categories/55/subcat/65489'>چای و دمنوش</Link></li>
                            <li><Link to='/categories/55/subcat/65490'>ماء الشعیر</Link>ّ</li>
                        </ul>

                        <h4 style={{ textAlign: 'right', paddingTop: '20px', fontSize: '1.2rem' }}>فیلتر ها</h4>
                        <ul style={{ listStyle: 'none', textAlign: 'right' }}>
                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                                <div style={this.state.showOnly_InStock ? styleRoundSelectorActive : styleRoundSelectorPassive}
                                    onClick={() => this.setState({ showOnly_InStock: !this.state.showOnly_InStock })}
                                ><span style={Object.assign({
                                    backgroundColor: '#FFF',
                                    width: '0.6rem',
                                    height: '0.6rem',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '0.3rem',
                                }, this.state.showOnly_InStock ? { right: '0.3rem' } : { left: '0.3rem' })}></span></div>
                                <span>فقط کالاهای موجود</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <BottomNav />
                <Footer />

            </div >
        );
    }
}

export default CategoryPage;