import React, { Component } from 'react';
import Banner from '../Banner';
// import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.pkgd';
import 'flickity/css/flickity.css'

import './landingPage.css';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount() {

        const carousels = document.querySelectorAll('.myCarousel');
        carousels.forEach(carousel => {
            new Flickity(carousel, {
                // options go here
                accessibility: true,
                // enable keyboard navigation, pressing left & right keys

                adaptiveHeight: false,
                // set carousel height to the selected slide

                autoPlay: false,
                // advances to the next cell
                // if true, default is 3 seconds
                // or set time between advances in milliseconds
                // i.e. `autoPlay: 1000` will advance every 1 second

                cellAlign: 'left',
                // alignment of cells, 'center', 'left', or 'right'
                // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

                cellSelector: undefined,
                // specify selector for cell elements

                contain: true,
                // will contain cells to container
                // so no excess scroll at beginning or end
                // has no effect if wrapAround is enabled

                draggable: '>1',
                // enables dragging & flicking
                // if at least 2 cells

                dragThreshold: 3,
                // number of pixels a user must scroll horizontally to start dragging
                // increase to allow more room for vertical scroll for touch devices

                freeScroll: true,
                // enables content to be freely scrolled and flicked
                // without aligning cells

                friction: 0.2,
                // smaller number = easier to flick farther

                groupCells: false,
                // group cells together in slides

                initialIndex: 0,
                // zero-based index of the initial selected cell

                lazyLoad: true,
                // enable lazy-loading images
                // set img data-flickity-lazyload="src.jpg"
                // set to number to load images adjacent cells

                percentPosition: true,
                // sets positioning in percent values, rather than pixels
                // Enable if items have percent widths
                // Disable if items have pixel widths, like images

                prevNextButtons: true,
                // creates and enables buttons to click to previous & next cells

                pageDots: false,
                // create and enable page dots

                resize: true,
                // listens to window resize events to adjust size & positions

                rightToLeft: false,
                // enables right-to-left layout

                setGallerySize: true,
                // sets the height of gallery
                // disable if gallery already has height set with CSS

                watchCSS: false,
                // watches the content of :after of the element
                // activates if #element:after { content: 'flickity' }

                wrapAround: true
                // at end of cells, wraps-around to first for infinite scrolling
            });
        });


    }// end componentDidMount

    render() {
        return (
            <div>
                <section style={{
                    boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto', padding: '5px', paddingBottom: '40px',
                    background: 'linear-gradient(135deg, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 80%)', borderRadius: '8px',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                        <div><a href="/" style={{ fontSize: '0.9rem', color: '#007bFF' }}> مشاهده همه</a></div>
                        <h3><a href='/' style={{ fontSize: '1.1rem', color: '#444' }}> لبنیات</a></h3>
                    </div>
                    <div className="myCarousel">
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px' }}>
                                <div className='mmm'>
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
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/8.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>

                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/7.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>

                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/6.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/5.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/4.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/3.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/2.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/1.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section style={{
                    boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.35)', margin: '40px auto', padding: '5px', paddingBottom: '40px',
                    background: 'linear-gradient(135deg, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 80%)', borderRadius: '8px',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                        <div><a href="/" style={{ fontSize: '0.9rem', color: '#007bFF' }}> مشاهده همه</a></div>
                        <h3><a href='/' style={{ fontSize: '1.1rem', color: '#444' }}> لبنیات</a></h3>
                    </div>
                    <div className="myCarousel">
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/9.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/8.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>

                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/7.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>

                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/6.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/5.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/4.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/3.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/2.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/1.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Banner */}
                <Banner picAddr={'CrossBanners/crossBanner4.jpg'} alt={'سبدتو پر کن'} />
                <Banner picAddr={'CrossBanners/crossBanner5.jpg'} alt={'سبدتو پر کن'} />




                <section style={{
                    boxShadow: '0 8px 6px -6px rgba(68, 68, 68, 0.1)', margin: '40px auto', padding: '5px', paddingBottom: '40px',
                    background: 'linear-gradient(135deg, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 80%)', borderRadius: '8px',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                        <div><a href="/" style={{ fontSize: '0.9rem', color: '#007bFF' }}> مشاهده همه</a></div>
                        <h3><a href='/' style={{ fontSize: '1.1rem', color: '#444' }}> لبنیات</a></h3>
                    </div>
                    <div className="myCarousel">
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/9.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/8.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>

                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/7.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>

                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/6.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/5.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/4.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/3.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/2.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell">
                            <div style={{ marginTop: '50px', fontFamily: 'IRANSans' }}>
                                <div className='mmm' style={{}}>
                                    <span style={{ border: '2px solid #7F7', borderRadius: '50%', position: 'relative', zIndex: 200 }}>
                                        <button style={{ background: 'none', border: 'none', }}>
                                            <span style={{ color: '#7F9' }}>+</span>
                                        </button>
                                    </span>
                                    <a href='/' style={{ fontFamily: 'IRANSans', fontSize: '1.2em', textDecoration: 'none' }}>
                                        <div>
                                            <img src={require('../../images/products/1.jpg')} className='img-responsive' />
                                            <span style={{
                                                fontFamily: "'IRANSans', sans-serif", fontSize: '0.7em',
                                                backgroundColor: '#1baf19',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                position: 'absolute',
                                                right: '8%',
                                                bottom: '40%',
                                                color: '#FFF'
                                            }}>تخفیف 14 %</span>
                                        </div>
                                        <div style={{ padding: '0 15px' }}>
                                            <b style={{
                                                fontFamily: 'inherit',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.9rem',
                                                color: '#333',
                                                padding: '2rem 0px 1rem',
                                                direction: 'rtl'
                                            }}>
                                                <span style={{
                                                    fontFamily: 'inherit',
                                                    lineHeight: 1.5
                                                }}>10,212 تومان</span>
                                                <small style={{ textDecoration: 'line-through' }}>11,875</small>
                                            </b>
                                            <h4 style={{ fontSize: '0.8rem', lineHeight: 1.5, textAlign: 'center', color: '#333' }}>شامپو صورت و بدن آبی گلرنگ ۲۸۰ گرمی</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Banner */}
                <Banner picAddr={'CrossBanners/crossBanner3.jpg'} alt={'سبدتو پر کن'} />


            </div>
        );
    }
}



export default Landing;