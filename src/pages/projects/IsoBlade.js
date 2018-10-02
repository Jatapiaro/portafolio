import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class IsoBlade extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('iso-blade-navbar');
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
            <div className="iso-blade">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

IsoBlade.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Iso Blade",
            introduction: "A 3D airfoils simulator",
            link: undefined,
            linkLabel: 'here',
            image: require('./../../assets/pages/works/iso-blade.jpg')
        },
        about: [
            {
                type: 'text',
                data: 'Iso Blade was a project that wanted to be a complete airfoil simulator. From the creation of an airfoil, to the application of all the computations that are related to it. From the energy that can generate, and how the wind affects the airfoil, and also things like the waste of the structure.'
            },
            {
                type: 'text',
                data: 'This projects started as a lot of separate Matlab programs that achieve different things. Then we started the integration of all those single items into one big project. The first approach intended to use Python, this because we can almost copy most of the things that we have in matlab and show them on a GUI using Kivy. But at the end, the goal of the project was to be totally in 3D.'
            },
            {
                type: 'text',
                data: 'So that bring us to the Unity3D era of this project. In this stage we used Unity as our front end, and we realized all the operations with Julia. Then, more people get involved on the project, and wanted to achieve a better performance, and improve the software with real time rendering, showing all the computations applied to the airfoil in real time.'
            },
            {
                type: 'text',
                data: 'Then become the C++ era, with QT and OpenGL. Unfortunately, a month after the project started to be developed with this technology, Mexico suffered an earthquake. This event lead to the cancellation of the project. I can’t recover much of the stuff worked on this project, but just some small code snippets in my github and some demos that are in the videos below.'
            },
            {
                data: 'https://www.youtube.com/embed/pBENqmMgI30',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/r0rl4LSUoI4',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/Nkis2k7lzT8',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/J83xSzSr5k8',
                type: 'video'
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "Iso Blade",
            introduction: "Un simulador en 3D de turbinas",
            link: undefined,
            linkLabel: 'aquí',
            image: require('./../../assets/pages/works/iso-blade.jpg')
        },
        about: [
            {
                type: 'text',
                data: 'Iso Blade fue un proyecto que pretendía ser un simulador de turbinas. Esto iba a partir desde la creación de la turbina, hasta la aplicación de diferentes cálculos relacionados con estas, los cuales podían ser de desgaste, energía o incluso de la interacción del viento.'
            },
            {
                type: 'text',
                data: 'El proyecto comenzó siendo muchos códigos por separado en Matlab. Después de esto se comenzó con la integración de todos estos elementos en un solo proyecto. El primer acercamiento al desarrollo del proyecto fue  usar Python pues podíamos casi copiar muchas cosas de Matlab y trasladarlas a Python, para finalmente mostrarlas en una interfaz gráfica con Kivy. Sin embargo la intención final del proyecto era que todo fuera en 3D.'
            },
            {
                type: 'text',
                data: 'Así llegamos a la era de Unity3D. Durante esta etapa, usamos Unity como nuestro front end y realizamos todos los cálculos en Julia. Durante esta etapa hubo más gente involucrada en el proyecto, todos ellos acordaron que querían obtener un mayor performance y mejorar el software con cálculos que se mostrarán en tiempo real sobre la estructura.'
            },
            {
                type: 'text',
                data: 'Por lo tanto, llegamos a la era de C++ con QT y OpenGL. Desafortunadamente, un mes después de empezar a desarrollar esta nueva versión ocurrió el terremoto del 19 de septiembre en México. Llevando a la cancelación del proyecto. No pude recuperar todo el material que había de este proyecto, salvo algunos pedazos de código en mi github y algunos demos que se muestran en los videos siguientes:'
            },
            {
                data: 'https://www.youtube.com/embed/pBENqmMgI30',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/r0rl4LSUoI4',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/Nkis2k7lzT8',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/J83xSzSr5k8',
                type: 'video'
            },
        ]
    }
}