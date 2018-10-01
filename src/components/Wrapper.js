import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './../pages/Home';

export default class Wrapper extends React.Component {

    state = {
        lang: "en"
    }

    toggleLang = () => {
        this.setState((prevState) => {
            const lang = (prevState.lang == "en") ? "es" : "en";
            localStorage.setItem('lang', lang);
            console.log(localStorage.getItem('lang'));
            return {
                lang: lang
            }
        })
    }

    componentWillMount() {
        let x = localStorage.getItem('lang');
        if ( x ) {
            this.setState({
                lang: x
            })
        } else {
            localStorage.setItem('lang', 'en');
        }
    }

    render() {
    
        return (

            <div>
                <Header lang={this.state.lang} toggleLang={this.toggleLang}/>
                <BrowserRouter>
                    <div>
                        <Route path="/" render={() => <Home lang={this.state.lang} />} exact={true} />
                    </div>
                </BrowserRouter>
                <Footer />
            </div>

        );

    }

}