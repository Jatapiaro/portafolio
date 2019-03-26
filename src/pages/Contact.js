import React from 'react';
import {
    FaMobileAlt,
    FaEnvelope,
    FaTwitter,
    FaFile,
    FaYoutube,
    FaGithub
} from 'react-icons/fa';

export default class Contact extends React.Component {

    state = {
        data: {}
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('custom-navbar');
    }

    componentWillReceiveProps(nextProps) {
        const lang = nextProps.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="contact">
                <div className="my-container">

                    <div className="introduction">
                        <div>
                            <FaMobileAlt 
                                className="contact-con" 
                                size={"10em"}
                                color={"#ffa345"}
                            />
                        </div>
                        <div>
                            <h1>{this.state.data.hello}</h1>
                            <p>{this.state.data.salutation}</p>
                        </div>
                    </div>

                    <div className="introduction purple">
                        <div>
                            <FaEnvelope
                                className="contact-con"
                                size={"10em"}
                                color={"#ffd2ad"}
                            />
                        </div>
                        <div>
                            <h1>{this.state.data.email}</h1>
                            <p>{this.state.data.emailDescription} <a href="mailto:jatapiaro@gmail.com">jatapiaro@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="introduction white">
                        <div>
                            <FaTwitter
                                className="contact-con"
                                size={"10em"}
                                color={"#00aced"}
                            />
                        </div>
                        <div>
                            <h1>{this.state.data.twitter}</h1>
                            <p>{this.state.data.twitterDescription} <a target="_blank" href="https://twitter.com/jacob_et_cetera">@jacob_et_cetera</a></p>
                        </div>
                    </div>

                    <div className="introduction mid-orange">
                        <div>
                            <FaFile
                                className="contact-con"
                                size={"10em"}
                                color={"#624185"}
                            />
                        </div>
                        <div>
                            <h1>{this.state.data.resume}</h1>
                            <p>{this.state.data.resumeDescription}<a target="_blank" href="https://drive.google.com/file/d/1m9wahXDplvjf7n0mIuw2k2Rotn0DlU1-/view?usp=sharing">{this.state.data.resumeLink}</a></p>
                        </div>
                    </div>

                    <div className="introduction orange">
                        <div>
                            <FaYoutube
                                className="contact-con"
                                size={"10em"}
                                color={"#d83431"}
                            />
                        </div>
                        <div>
                            <h1>{this.state.data.youtube}</h1>
                            <p>{this.state.data.youtubeDescription}<a target="_blank" href="https://www.youtube.com/channel/UCGY6v72JuKEmi2zMWzI8VSg">{this.state.data.resumeLink}</a></p>
                        </div>
                    </div>

                    <div className="introduction white">
                        <div>
                            <FaGithub
                                className="contact-con"
                                size={"10em"}
                                color={"#624185"}
                            />
                        </div>
                        <div>
                            <h1>{this.state.data.github}</h1>
                            <p>{this.state.data.githubDescription} <a target="_blank" href="https://github.com/Jatapiaro">Jatapiaro</a></p>
                        </div>
                    </div>                    

                </div>
            </div>
        );
    }

}

Contact.defaultProps = {
    en: {
        hello: 'Hello!',
        salutation: 'Feel free to contact me on the options below:',
        email: 'Email',
        emailDescription: 'Send me an email to: ',
        twitter: 'Twitter',
        twitterDescription: 'Or just send me a tweet: ',
        resume: 'Resume',
        resumeDescription: 'You could find another way to contact me if you checkout my resume',
        resumeLink: 'here',
        youtube: 'Youtube',
        youtubeDescription: "Please, don't forgive to visit my youtube channel",
        github: 'Github',
        githubDescription: "Please, don't forgive to visit my Github: ",
    },
    es: {
        hello: '¡Hola!',
        salutation: 'Siéntete libre de ponerte en contacto conmigo usando alguna de las siguientes opciones:',
        email: 'Email',
        emailDescription: 'Puedes mandarme un correo a: ',
        twitter: 'Twitter',
        twitterDescription: 'O simplemente envíame un tweet: ',
        resume: 'Curriculum',
        resumeDescription: 'Puedes encontrar otra forma de contactarme si revisas mi curriculum',
        resumeLink: 'aquí',
        youtube: 'Youtube',
        youtubeDescription: "Please, don't forgive to visit my youtube channel",
        github: 'Github',
        githubDescription: "Por favor, no te olvides de visitar mi Github:",
    }
}