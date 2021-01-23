import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './../pages/Home';
import Contact from './../pages/Contact';
// import MeetMe from './../pages/MeetMe';
import Works from './../pages/Works';

import SantanderUniversidades from './../pages/projects/SantanderUniversidades';
import Math3D from './../pages/projects/Math3D';
import ExamAdapt from '../pages/projects/ExamAdapt';
import Geriatron from '../pages/projects/Geriatron';
import CocoGame from '../pages/projects/CocoGame';
import IsoBlade from '../pages/projects/IsoBlade';
import Espora from '../pages/projects/Espora';
import Apple from '../pages/projects/Apple';

export default class Wrapper extends React.Component {

    state = {
        lang: "en",
        navbarClass: undefined,
    }

    toggleLang = () => {
        this.setState((prevState) => {
            const lang = (prevState.lang == "en") ? "es" : "en";
            localStorage.setItem('lang', lang);
            return {
                lang: lang
            }
        })
    }

    toggleNavbarClass = (navbarClass) => {
        this.setState({
            navbarClass: navbarClass
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
                <Header lang={this.state.lang} toggleLang={this.toggleLang} navbarClass={this.state.navbarClass}/>
                <BrowserRouter>
                    <div>
                        <Route path="/" render={() => <Home lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        { /* <Route path="/about-me" render={() => <MeetMe lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} /> */ }
                        <Route path="/contact" render={() => <Contact lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/work" render={() => <Works lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/santander-universidades" render={() => <SantanderUniversidades lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass}/>} exact={true} />
                        <Route path="/math-3d" render={() => <Math3D lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/examadapt" render={() => <ExamAdapt lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/geriatron" render={() => <Geriatron lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/coco-game" render={() => <CocoGame lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/iso-blade" render={() => <IsoBlade lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/espora" render={() => <Espora lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                        <Route path="/apple" render={() => <Apple lang={this.state.lang} toggleNavbarClass={this.toggleNavbarClass} />} exact={true} />
                    </div>
                </BrowserRouter>
                <Footer />
            </div>

        );

    }

}