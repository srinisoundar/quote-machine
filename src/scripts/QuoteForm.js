import React from 'react';
import style from '../styles/quote-form.scss';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<form className="quote-form" onSubmit={this.props.onQuoteSubmit}>
            <input className="quote-form-text"  placeholder="Enter quote here..." type="text" onChange={this.props.onChangeQuote} />
            <button className="quote-form-submit" type="submit"/>
        </form>);
    }


}

export default QuoteForm;