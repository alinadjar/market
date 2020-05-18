import React, { Component } from 'react';
import Item from './CategoryItem';

class CategoryBoxes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div className='row' style={{ margin: '1.5rem auto' }}>

                <Item  name={'شیرینی جات'} url={'/categories/sweets'} picAddr={'Categories/shirini.jpg'} />
                <Item  name={'بهداشتی'} url={'/categories/behdashti'} picAddr={'Categories/behdashti.jpg'} />
                <Item  name={'خواربار'} url={'/categories/groceries'} picAddr={'Categories/kharobar.jpg'} />
                <Item  name={'کنسرو جات'} url={'/categories/canned'} picAddr={'Categories/canned.jpg'} />
                <Item  name={'تنقلات'} url={'/categories/snacks'} picAddr={'Categories/tanagholat.jpg'} />
                <Item  name={'چاشنی و افزودنی'} url={'/categories/flavoring'} picAddr={'Categories/chashni.jpg'} />
                <Item  name={'شیرینی جات'} url={'/categories/sweets'} picAddr={'Categories/shirini.jpg'} />                              
                <Item  name={'شیرینی جات'} url={'/categories/sweets'} picAddr={'Categories/shirini.jpg'} />                              
            </div>
         );
    }
}
 


export default CategoryBoxes;