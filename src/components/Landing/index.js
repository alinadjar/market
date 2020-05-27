import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../iRedux/Actions/cart_Actions';

import ProductBox from './ProductBox';
import Banner from '../Banner';
// import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.pkgd';
import 'flickity/css/flickity.css';

import './landingPage.css';
import ProductModal from '../Common/ProductModal';


// import toastr from 'toastr/toastr'


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductModal: false,
            selectedProduct: null
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


        // toastr.info('sonme test ...');
    }// end componentDidMount


    boxClickHandler = (p) => {
        // toastr.info('sonme test ...');
        this.setState({ showProductModal: true, selectedProduct: p });
    }

    closeModal = () => {
        this.setState({ showProductModal: false, selectedProduct: null });
    }

    render() {
        return (
            <>
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
                            {
                                this.props.products != null &&
                                this.props.products.map(p =>
                                    <div className="carousel-cell" key={p.id}>
                                        <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler}/>
                                    </div>
                                )
                            }
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
                            {
                                this.props.products != null &&
                                this.props.products.map(p =>
                                    <div className="carousel-cell" key={p.id}>
                                        <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler}/>
                                    </div>
                                )
                            }
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
                            {
                                this.props.products != null &&
                                this.props.products.map(p =>
                                    <div className="carousel-cell" key={p.id}>
                                        <ProductBox product={p} add2Cart={this.props.addToCart} boxClick={this.boxClickHandler}/>
                                    </div>
                                )
                            }
                        </div>
                    </section>



                    {/* Banner */}
                    <Banner picAddr={'CrossBanners/crossBanner3.jpg'} alt={'سبدتو پر کن'} />


                </div>
                {
                    this.state.showProductModal &&
                    <ProductModal close={this.closeModal} product={this.state.selectedProduct} add2Cart={this.props.addToCart} />
                }
            </>
        );
    }
}


const mapStateToProps = (store) => ({
    products: store.shop.products
})

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);