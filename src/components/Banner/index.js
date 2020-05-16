import React, {Component} from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row' style={{ margin: '20px auto' }}>
                <a href='/' style={{ width: '100%' }}>
                    <img src={require(`../../images/${this.props.picAddr}`)} alt={this.props.alt} style={{ width: '100%' }} />
                </a>
            </div>
        );
    }
}

export default Banner;