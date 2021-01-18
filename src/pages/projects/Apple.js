import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class Apple extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('white-navbar');
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
            <div className="apple">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
                <br /><br /><br /><br /><br /><br />
            </div>
        );
    }

}

Apple.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Apple",
            introduction: "Since 2020 I'm part of the Safari team for MacOS",
            link: undefined,
            linkLabel: 'here',
            image: require('./../../assets/pages/home/apple.jpg')
        },
        about: [
            {
                type: 'text',
                data: 'In January of 2020, I joined the Safari MacOS team.'
            },
            {
                type: 'text',
                data: 'During my time at Apple I have been involved in the development of new Safari UI and the adoption of some web extensions APIs to Safari.'
            },
            {
                type: 'text',
                data: 'Also, I became a lead developer in the Accessibility area for Safari on MacOS. Improving the experience for VoiceOver users.'
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "Apple",
            introduction: "Desde 2020, soy parte del equipo de Safari para MacOS",
            link: undefined,
            linkLabel: '',
            image: require('./../../assets/pages/home/apple.jpg')
        },
        about: [
            {
                type: 'text',
                data: 'En Enero de 2020, me uní al equipo de Safari para MacOS.'
            },
            {
                type: 'text',
                data: 'Durante mi tiempo en Apple he estado involucrado en el desarrollo de nueva interfaz de usuario para Safari; así como en la adopción de algunas APIs para extensiones web en Safari.'
            },
            {
                type: 'text',
                data: 'Además, me convertí en un desarrollador líder en el área de accesibilidad en Safari para MacOS, mejorando la experiencia para usuarios de VoiceOver.'
            },
        ]
    }
}