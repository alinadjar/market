import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch} from "react-router-dom";

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    
    
    return (
      <div className='col-6 col-sm-4 col-md-3 col-lg-2' style={{ marginTop: '1rem', padding: '0px 0.5rem' }}>
        <Link to={this.props.url} style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 5px', borderRadius: '5px', minHeight: '66px',
          backgroundColor: '#FFF', cursor: 'pointer', textDecoration: 'none'
        }}>
          <span style={{ width: '50%', flexBasis: '35%' }}>
            <img src={require(`../../images/${this.props.picAddr}`)}
              style={{ width: '100%', height: 'auto' }}
              className='img-fluid'
              alt='some txt'
            />
          </span>
          <h3 style={{ fontSize: '.8em' }}>{this.props.name}</h3>
        </Link>
      </div>
    );
  }
}

export default CategoryItem;