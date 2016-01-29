
import React from 'react';
import style from '../styles/quote-sayer.scss';

class QuoteSayer extends React.Component {

	constructor(props){
        super(props);

	}

    render() {
        return (<div className="quote-sayer"> <h2> {this.props.quote} </h2></div>);
    }
}

export default QuoteSayer;