import React from 'react';
import style from '../styles/quote-block.scss';


class QuoteBlock extends React.Component {
    
    constructor(props){
    	super(props);
    }
    
    render(){
    	return (<div className="quote-block">
            <button type="button" className="quote-btn btn btn-lg btn-primary" onClick={this.props.showQuote}>New Quote</button>
            <button type="button" className="quote-btn btn btn-lg btn-default" onClick={this.props.addQuote}>Add Quote</button>
    		</div>);
    }
}

export default QuoteBlock;