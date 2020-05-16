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

                <Item  name={'شیرینی جات'} picAddr={'Categories/shirini.jpg'} />
                <Item  name={'بهداشتی'} picAddr={'Categories/behdashti.jpg'} />
                <Item  name={'خواربار'} picAddr={'Categories/kharobar.jpg'} />
                <Item  name={'کنسرو جات'} picAddr={'Categories/canned.jpg'} />
                <Item  name={'تنقلات'} picAddr={'Categories/tanagholat.jpg'} />
                <Item  name={'چاشنی و افزودنی'} picAddr={'Categories/chashni.jpg'} />
                <Item  name={'شیرینی جات'} picAddr={'Categories/shirini.jpg'} />
                <Item  name={'شیرینی جات'} picAddr={'Categories/shirini.jpg'} />
              
            </div>
         );
    }
}
 


export default CategoryBoxes;