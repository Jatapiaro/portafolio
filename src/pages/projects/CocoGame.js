import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class CocoGame extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('coco-game-navbar');
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
            <div className="coco-game">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

CocoGame.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Coco Game",
            introduction: "A funny app to learn physics and math. I really invite yout to read the paper that the people in charge wrote about this project ",
            link: 'https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math',
            linkLabel: 'here',
            image: require('./../../assets/pages/works/coco-game.png')
        },
        about: [
            {
                'type': 'text',
                'data': 'Coco Game is a web application to involve students in the learning of math and physics. To achieve this, we use gamification to make the students want to learn and also, be at the top of the leaderboards. Coco Game was built using Meteor.'
            },
            {
                'type': 'text',
                'data': 'Coco Game is divided in two parts. The first one dedicated to the professor and the second one dedicated to the students interaction. The professors part allows to create new question, new worlds and also new universes. We can say that each world is a subtheme and each universe a subject.'
            },
            {
                'type': 'image',
                'data': require('./../../assets/pages/projects/coco-game/1.png')
            },
            {
                type: 'text',
                data: 'Finally the student part, allows the students to answer the question that their professors has been added, and the platform display this question in different ways, such as a multiple choice question, drag & drop questions, word search and also crosswords.'
            },
            {
                'type': 'image',
                'data': require('./../../assets/pages/projects/coco-game/2.png')
            },
            {
                type: 'text',
                data: 'At the beginning of the page I let you a link to review the paper that the people in charge published about this game, so check it out at: https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math'
            },
            {
                'type': 'image',
                'data': require('./../../assets/pages/projects/coco-game/3.png')
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "Coco Game",
            introduction: "Una aplicación divertida para aprender física y matemáticas. Te invito a leer el paper que las personas a cargo del proyecto escribieron ",
            link: 'https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math',
            linkLabel: 'aquí',
            image: require('./../../assets/pages/works/coco-game.png')
        },
        about: [
            {
                'type': 'text',
                'data': 'Coco Game es una aplicación web para impulsar a los alumnos en el estudio de materias como la física y las matemáticas. Para ello se buscó utilizar gamification, de está forma además de querer aprender, los alumnos competirán entre sí por estás en lo más alto de los leaderboards. Coco Game fue construido utilizando Meteor.'
            },
            {
                'type': 'text',
                'data': 'Coco Game, estaba dividido en dos partes, la de los profesores y la de los alumnos. El módulo de los profesores les permite crear nuevas preguntas, así como crear mundos y universos. Podríamos tomar los mundos como subtemas y los universos como una materia.'
            },
            {
                'type': 'image',
                'data': require('./../../assets/pages/projects/coco-game/1.png')
            },
            {
                type: 'text',
                data: 'Finalmente, se desarrolló la parte del alumno, donde él podría contestar las preguntas que se han ido añadiendo, utilizando diferentes métodos como opción múltiple, ejercicios de drag & drop, relacionar columnas, sopas de letras y crucigramas.'
            },
            {
                'type': 'image',
                'data': require('./../../assets/pages/projects/coco-game/2.png')
            },
            {
                type: 'text',
                data: 'Al principio de la página está el link para que visites el paper que los encargados escribieron acerca de este juego, así que visitalo en: https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math'
            },
            {
                'type': 'image',
                'data': require('./../../assets/pages/projects/coco-game/3.png')
            },
        ]
    }
}