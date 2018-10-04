import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class Espora extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('black-navbar');
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
            <div className="math-3d espora">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

Espora.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Espora Estudio",
            introduction: "This is my current job",
            link: undefined,
            linkLabel: 'here',
            image: require('./../../assets/pages/works/espora-estudio.gif')
        },
        about: [
            {
                type: 'text',
                data: 'During my time at Espora I\'ve developed the following projects:'
            },
            {
                type: 'text-link',
                data: 'Creation a webpage for a social media dance contest, making the possibility to upload your video, and making easy to the judges the evaluation of the videos, the organizers the possibility to know static sin charts about the contest and finally the vote stage where people decided the finalists. This project is available ',
                link: 'https://dancegeneration.milifetime.tv/',
                linkLabel: 'here'
            },
            {
                type: 'text-link',
                data: 'Inome App, which helps people in the process of reflection, and also letting them know the balance between his positive and negative experiences, feelings and needs. You can check the app ',
                link: 'https://itunes.apple.com/us/app/inome-i-know-me/id1333913968',
                linkLabel: 'here'
            },
            {
                type: 'text',
                data: 'Humi: A telegram bot for Bayer Employees to help them with information about the human resources area.',
            },
            {
                type: 'text-link',
                data: 'GOAL, a project to help students of Industrial Engineering and his professors to have a platform to create lessons, upload resources and apply evaluations. You can check the site ',
                link: 'http://goalproject.co',
                linkLabel: 'here'
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "Espora Estudio",
            introduction: "Actualmente trabajo aquí",
            link: undefined,
            linkLabel: '',
            image: require('./../../assets/pages/works/espora-estudio.gif')
        },
        about: [
            {
                type: 'text',
                data: 'Durante mi tiempo en Espora, he realizado los siguientes proyectos:'
            },
            {
                type: 'text-link',
                data: 'Dance Generation: Creación de un sitio web para un concurso de baile organizado por Lifetime. El sitio permitía a los concursantes registrar su participación, permitiendo enviar sus videos. Por otro lado a los jueces les daba la posibilidad de evaluar a los participantes y decidir a los finalistas. A su vez para los organizadores se les daba una sección para verificar estadísticas mediante gráficos acerca del concurso. Finalmente, al público en general se le dio la opción para votar y decidir a los tres finalistas. Puedes checar la página ',
                link: 'https://dancegeneration.milifetime.tv/',
                linkLabel: 'aquí'
            },
            {
                type: 'text-link',
                data: 'Inome App, la cual es una aplicación que busca ayudar a las personas a realizar el proceso de reflexionar sobre su día a día y darle gráficos sobre el balance que hay entre sus experiencias positivas y negativas. La aplicación se encuentra actualmente en la App Store. Puedes checar la app ',
                link: 'https://itunes.apple.com/us/app/inome-i-know-me/id1333913968',
                linkLabel: 'aquí'
            },
            {
                type: 'text',
                data: 'Humi: Un bot de telegram para apoyar a las personas de bayer en temas relacionados con recursos humanos',
            },
            {
                type: 'text-link',
                data: 'GOAL, una plataforma que pretende generar contenido así como aplicar evaluaciones a alumnos en la áreas de la administración, la estadística y la logística. Puedes checar la página ',
                link: 'http://goalproject.co',
                linkLabel: 'aquí'
            },
        ]
    }
}