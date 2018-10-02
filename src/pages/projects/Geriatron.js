import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class Geriatron extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('geriatron-navbar');
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
            <div className="geriatron">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

Geriatron.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Geriatron",
            introduction: "A webapp to support geriatricians on the application of test to their patients. Currently is used in two hospitals in Mexico",
            link: undefined,
            linkLabel: 'here',
            image: require('./../../assets/pages/home/geriatron.jpg')
        },
        about: [
            
        ]
    },
    es: {
        projectIntroduction: {
            title: "Geriatron",
            introduction: "Una aplicación web para apoyar a los geriatras en la aplicación de pruebas a sus paciente. Actualmente es usado en dos hospitales en México",
            link: undefined,
            linkLabel: 'aquí',
            image: require('./../../assets/pages/home/geriatron.jpg')
        },
        about: [

        ]
    }
}