import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class Math3D extends React.Component {

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
            <div className="math-3d">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

Math3D.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Math 3D",
            introduction: "During the first months of 2018 I was a collaborator on the develop of an AR app for a Math Book",
            link: undefined,
            linkLabel: 'here',
            image: require('./../../assets/pages/home/math-3d.jpg')
        },
        about: [
            {
                data: 'In february of 2017, I collaborate with the Tecnológico de Monterrey in a project related with a math book. This book pretends to have on their pages images, these images, at the moment the camera sees them and also the app is open, will show questionnaires, activities, and also 3D representations of the functions that the student is learning.',
                type: 'text'
            },
            {
                data: 'You can see a demo that was realized during the early stages of development. In this demo, you can see some functions and in some cases, their limits',
                type: 'text'
            },
            {
                data: 'https://www.youtube.com/embed/N5ZvSZvHs1Q',
                type: 'video'
            },
            {
                data: 'To develop this app, we used Unity3D and Vuforia for the AR interactions. Due to my graduation in May of 2018, my contract was just until July of 2018; so I have to leave the project.',
                type: 'text'
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "Math 3D",
            introduction: "A principios de 2018, colabore en el desarrollo de una aplicación de RA para un libro de matemáticas",
            link: 'http://santanderuniversidades.com.mx',
            link: undefined,
            image: require('./../../assets/pages/home/math-3d.jpg')
        },
        about: [
            {
                data: 'En febrero de 2017, colaboré en el Tecnológico de Monterrey, en un proyecto relacionado con un libro de Matemáticas. Este libro pretende que en las páginas, encuentres imágenes, las cuales, al ser vistas por la cámara, mientras la aplicación esté abierta, mostrará tanto cuestionarios, ejercicios, así como la representación en 3D de las funciones que el alumno esté aprendiendo.',
                type: 'text'
            },
            {
                data: 'A continuación, puedes consultar un video demo que se hizo durante una de las primeras etapas del desarrollo. En ella se muestran diferentes funciones y en algunos casos, sus límites.',
                type: 'text'
            },
            {
                data: 'https://www.youtube.com/embed/N5ZvSZvHs1Q',
                type: 'video'
            },
            {
                data: 'Para realizar este proyecto, utilizamos Unity3D y Vuforia para las interacciones con realidad aumentada. Debido a que me gradué de la carrera en Mayo de 2018, mi contrato solo llegó hasta Julio de 2018 y tuve que dejar el proyecto. ',
                type: 'text'
            }
        ]
    }
}