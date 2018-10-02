import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class ExamAdapt extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('exam-adapt-navbar');
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
            <div className="examadapt">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

ExamAdapt.defaultProps = {
    en: {
        projectIntroduction: {
            title: "ExamAdapt",
            introduction: "A new way to apply exams, in which each question is a node, and each answer a vertex. ExamAdapt is available ",
            link: 'http://elnovus.ccm.itesm.mx:8082/ExamAdapt/',
            linkLabel: 'here',
            image: require('./../../assets/pages/home/exam-adapt.jpg')
        },
        about: [
            {
                data: 'ExamAdapt is a new way to apply exams to students. This new way consist in take an exam as a graph, in which each question is a node and each answer is a vertex. This lead to students, answering the same exams to get to a different question according to their answers, and finally to a final state of approved or failed. This project was built using JSF + FPA + PrimeFaces.',
                type: 'text'
            },
            {
                data: require('./../../assets/pages/projects/examadapt/1.png'),
                type: 'image'
            },
            {
                data: 'On the previous image, we can see a little bit of the questionnaire creation tool that the professors have to create their exams. Also, the system allows to create campus, lectures, groups, divisions, questions, etc. And of course, the main function, evaluate an student by answering one of the exams; something that we can see on the image below.',
                type: 'text'
            },
            {
                data: require('./../../assets/pages/projects/examadapt/2.png'),
                type: 'image'
            },
            {
                data: 'Finally I want to show you a little demo that was made about the group functionality and the functionality of a students answering an exam.',
                type: 'text'
            },
            {
                data: 'https://www.youtube.com/embed/rDeKoaaN7tc',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/XNUbNZJjv3k',
                type: 'video'
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "ExamAdapt",
            introduction: "Un nueva forma de aplicar exámenes, donde cada pregunta es un nodo y cada respuesta un vértice. ExamAdapt esta disponbile ",
            link: 'http://elnovus.ccm.itesm.mx:8082/ExamAdapt/',
            linkLabel: 'aquí',
            image: require('./../../assets/pages/home/exam-adapt.jpg')
        },
        about: [
            {
                data: 'ExamAdapt es una nueva de aplicar exámenes a los alumnos y fue desarrollado para el departamento de Matemáticas del Tecnológico de Monterrey. La cual consiste en tener exámenes que sean vistos como un grafo. Es decir cada pregunta es una nodo y cada vértice es una respuesta. Llevando finalmente a un estado de aprobado o reprobado al alumnos. Es decir, dos respuestas distintas, llevaran a cada alumno a una pregunta totalmente distinta y finalmente a un estado de aprobado o reprobado. ExamAdapt fue desarrollado utilizando JSF + JPA + PrimeFaces.',
                type: 'text'
            },
            {
                data: require('./../../assets/pages/projects/examadapt/1.png'),
                type: 'image'   
            },
            {
                data: 'En la imagen anterior, podemos ver un poco de la herramienta de creación de cuestionarios que los profesores tienen para crear sus exámenes. Además de esto, el sistema permite crear campus, materias, grupos, divisiones, preguntas, etc. Y la función principal, es que el alumno conteste un cuestionario, como lo podemos ver en la imagen de abajo.',
                type: 'text'
            },
            {
                data: require('./../../assets/pages/projects/examadapt/2.png'),
                type: 'image'
            },
            {
                data: 'Finalmente pueden observar una pequeño demo que se hizo de la funcionalidad del grupo y del alumno contestando su examen.',
                type: 'text'
            },
            {
                data: 'https://www.youtube.com/embed/rDeKoaaN7tc',
                type: 'video'
            },
            {
                data: 'https://www.youtube.com/embed/XNUbNZJjv3k',
                type: 'video'
            },
        ]
    }
}