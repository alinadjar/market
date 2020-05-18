
import React, { Component } from 'react';
import SidePanelBasket from '../SidePanel/Basket';
import { connect } from 'react-redux';

import './loader.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}



                {this.props.isNowLoading &&
                    <div style={{ backgroundColor: '#3e85c7db', width: '100%', height: '100%', position: 'fixed', top: 0, opacity: 0.3, zIndex: 9999 }}>
                        <div className="loader"></div>
                    </div>
                }
                
                <SidePanelBasket />
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    isNowLoading: state.common.loading,
    showBasketSidePanel: state.common.showBasketPanel
})



export default connect(mapStateToProps, null)(Layout);