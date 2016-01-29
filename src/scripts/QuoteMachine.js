import React from 'react';
import QuoteBlock from './QuoteBlock';
import QuoteSayer from './QuoteSayer';
import QuoteForm from './QuoteForm';
import style from '../styles/quote-machine.scss';

class QuoteMachine extends React.Component {

    constructor(props){
    	super(props);
        this.quotes = [
            'Life is about making an impact, not making an income. –Kevin Kruse',
            'Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill',
            'Strive not to be a success, but rather to be of value. –Albert Einstein',
            'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost',
            'I attribute my success to this: I never gave or took any excuse. –Florence Nightingale',
            'You miss 100% of the shots you don’t take. –Wayne Gretzky',
            'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan',
            'The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart',
            'Every strike brings me closer to the next home run. –Babe Ruth',
            'Definiteness of purpose is the starting point of all achievement. –W. Clement Stone',
            'Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse',
            'Life is what happens to you while you’re busy making other plans. –John Lennon'
        ];

    	this.state ={quote: ''};
        this.newState = '';
    }
    
    componentDidMount(){
        this.showQuote();
    }

    render(){
    	return (<div className="quote-machine container">
            <h1 className="quote-header">Random Quote Machine</h1>
            <div className="jumbotron">
                <QuoteSayer quote={this.state.quote} />
            </div>
    	    <QuoteBlock addQuote={this.addQuote} showQuote={this.showQuote.bind(this)}/>
            <QuoteForm onChangeQuote={this.onChangeQuote.bind(this)} onQuoteSubmit={this.onQuoteSubmit.bind(this)}/>
            </div>);
    }

    showQuote(){
        this.setState({quote: this.getRandomQuote()});
    }
    
    onChangeQuote(e) {
        this.newState = e.target.value;
    }

    onQuoteSubmit(e) {
        e.preventDefault();
        if(this.newState){
            this.quotes.push(this.newState);
            e.target.reset();
            let form = document.getElementsByClassName('quote-form');
            form[0].classList.remove('quote-form-show');
            this.newState = '';
        }
    }

    addQuote(e){
       let form = document.getElementsByClassName('quote-form');
       form[0].classList.toggle('quote-form-show');
    }

    getRandomQuote() {
        let min = 0;
        let max = this.quotes.length;
        let index = Math.floor(Math.random() * (max - min)) + min;
        return this.quotes[index];
    }
}

export default QuoteMachine;
