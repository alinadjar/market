import React, { Component } from 'react';
import './sidePanel.css';

import { connect } from 'react-redux';
import { toggleBasketSidePanel } from '../../../iRedux/Actions/common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class SidePanelBasket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPanel: false
        }
    }

    componentWillReceiveProps(nextProps) {

        // console.log('=========== ');
        // console.log('this.state.showPanel = '+ this.state.showPanel);
        // console.log('this.props.showPanelState = '+ nextProps.showPanelState);
        // console.log(this.state.showPanel !== nextProps.showPanelState)
        if (this.state.showPanel !== nextProps.showPanelState) {
            this.setState({ showPanel: !this.state.showPanel }, () => this.toggleSidePanel());
        }

    }


    toggleSidePanel = () => {

        const sidePanel = document.getElementById('sidePanel');
        // console.log(sidePanel);
        sidePanel.classList.toggle('isOpen');
        document.getElementById('backSidePanel').classList.toggle('isOpen');

        // this.setState({ showPanel: this.props.showPanelState });
        if (!sidePanel.classList.contains('isOpen')) {
            this.setState({ showPanel: !this.state.showPanel }, () => this.props.toggleBasketSidePanel());
        }
    }


    render() {
        return (
            <div id="backSidePanel" className="backSidePanel" onClick={this.toggleSidePanel}
                style={{ backgroundColor: '#00000077', height: '100%', position: 'fixed', top: 0 }}>
                <div className="sidePanel" id="sidePanel" style={{ height: '100%' }} onClick={(ev) => { ev.stopPropagation() }}>
                    <div style={{ height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <div style={{ height: '8%', display: 'flex', alignItems: 'center', backgroundColor: '#FFF' }}>
                                <div style={{ padding: '5px' }} onClick={this.toggleSidePanel}><span style={{ padding: '10px', cursor: 'pointer' }}>X</span></div>
                                <div style={{ textAlign: 'center', width: '100%' }}>Title</div>
                            </div>
                            <div style={{ height: '70%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <ul style={{ backgroundColor: 'rgb(64,125,182)', padding: '0px 10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', listStyle: 'none', color: '#FFF', padding: '5px 0' }}>
                                    <li style={{ direction: 'rtl' }}>
                                        <span>34,500 </span>
                                        <span>تومان</span>
                                    </li>
                                    <li>
                                        میزان کل تخفیف
                                    </li>
                                </ul>
                                <ul style={{ overflow: 'auto', width: '100%', listStyle: 'none', overflowY: 'auto', padding: '10px 0' }}>
                                    <div>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span>تومان</span>
                                                        <span> 14,500 </span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/1.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block' }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/2.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/3.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/4.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/5.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/6.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/7.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/8.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/9.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/1.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{ borderBottom: '1px solid #e4dfdf' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                                                    <div style={{ direction: 'rtl', fontSize: '0.7rem', paddingBottom: '5px' }}>
                                                        <span> 14,500 </span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div style={{ backgroundColor: '#FFF', borderRadius: '5px', boxShadow: 'rgba(0,0,0,0.25) 0px 2px 7px' }}>
                                                        <button style={{ color: '#2d9e2d', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faPlus} size='sm' /></button>
                                                        <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>2</span>
                                                        <button style={{ color: '#FF003B', padding: '5px 15px', fontSize: '1.0rem', background: 'none', border: 'none' }}> <FontAwesomeIcon icon={faMinus} size='sm' /></button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '35%', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <img src={require('../../../images/products/1.jpg')} style={{ width: '70%', height: '75px', margin: '0 auto', display: 'block', }} />
                                                </div>
                                            </div>
                                        </li>

                                    </div>
                                </ul>
                            </div>
                            <div className='checkoutBox' style={{ width: '100%', height: '22%', padding: '10px' }}>
                                <div>
                                    <textarea style={{ textAlign: 'right' }} className='form-control' placeholder='توضیحات سفارش خود را وارد کنید'></textarea>
                                </div>
                                <div style={{ fontSize: '1.1rem', display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                    <label className='btn btn-danger' onClick={(ev) => { ev.stopPropagation(); alert('Ha....Success'); }}
                                        style={{ height: 'fit-content', width: '12%', paddingTop: '10px', paddingBottom: '10px !important' }}>
                                        <span><FontAwesomeIcon icon={faTrashAlt} size='sm' style={{ color: '#FFF' }} /></span>
                                    </label>
                                    <label className='btn' onClick={(ev) => { ev.stopPropagation(); alert('Ha....Success'); }}
                                        style={{ height: 'fit-content', width: '85%', paddingTop: '10px', paddingBottom: '10px !important', position: 'relative', backgroundColor:'#3cad2f', color: '#FFF' }}>
                                        <span style={{ fontSize: '0.8rem', marginRight: '-30px' }}>تایید و ثبت سفارش</span>
                                        <span style={{ backgroundColor: '#166f16', borderRadius: '5px', position: 'absolute', left: '2%', fontSize: '0.8rem', padding: '2px 5px', direction: 'rtl' }}>
                                            <span>127,400</span>
                                            <span style={{ paddingRight: '8px'}}>تومان</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showPanelState: state.common.showBasketPanel
})

const mapDispatchToProps = {
    toggleBasketSidePanel
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanelBasket);