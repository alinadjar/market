import React, { Component } from 'react';
import './sidePanel.css';

import { connect } from 'react-redux';
import { toggleBasketSidePanel } from '../../../iRedux/Actions/common';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';


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
        console.log(sidePanel);
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
                <div className="sidePanel" id="sidePanel" style={{ height: '100%' }}>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <div style={{ height: '50px', display: 'flex', alignItems: 'center', backgroundColor: '#FFF' }}>
                                <div style={{ padding: '5px' }}><spna>X</spna></div>
                                <div style={{ textAlign: 'center', width: '100%' }}>Title</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <ul style={{ backgroundColor: 'rgb(64,125,182)', padding: '0px 10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', listStyle: 'none', color: '#FFF', padding: '5px 0' }}>
                                    <li>
                                        34,500 تومان
                                    </li>
                                    <li>
                                        میزان کل تخفیف
                                    </li>
                                </ul>
                                <ul style={{ overflow: 'auto', width: '100%', listStyle: 'none', overflowY: 'auto', padding: '10px' }}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <li>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '40%' }}>
                                                    <div>
                                                        <span>14,500 تومان</span>
                                                    </div>
                                                    <div>
                                                        <button style={{ color: '#0F0' }}>+</button>
                                                        <span>2</span>
                                                        <button style={{ color: '#00F' }}>-</button>
                                                    </div>
                                                </div>
                                                <div style={{ width: '30%' }}>
                                                    <span>سیب زمینی ۱.۵ کیلوگرمی (تعداد تقریبی ۶ عدد)</span>
                                                </div>
                                                <div style={{ width: '30%' }}>
                                                    <img src={require('../../../images/products/1.jpg')} style={{ width: '100px' }} />
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className='checkoutBox' style={{ width: '100%', padding: '10px' }}>
                                <div>
                                    <textarea className='form-control' placeholder='توضیحات سفارش خود را وارد کنید'></textarea>
                                </div>
                                <div>
                                    <button>
                                        <span>تایید و ثبت سفارش</span>
                                        <span>127,400 تومان</span>
                                    </button>
                                    <button>
                                        <span>ICON Trash</span>
                                    </button>
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