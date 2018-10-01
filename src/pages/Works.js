import React from 'react';
import {
    FaBriefcase
} from 'react-icons/fa';
import { Jumbotron, Card, Button, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

//https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math

export default class Works extends React.Component {

    constructor(props) {
        super(props);
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
            <div className="my-work">
                <Jumbotron>
                    <div>
                        <FaBriefcase
                            className="contact-con"
                            size={"10em"}
                            color={"#fff"}
                        />
                    </div>
                    <div>
                        <h1>{this.state.data.jumbotron.salutation}</h1>
                        <p>{this.state.data.jumbotron.description}</p>
                    </div>
                </Jumbotron>
                <div className="projects-label">
                    <center>
                        <h1>{this.state.data.projects}</h1>
                    </center>
                </div>
                <div className="projects">
                    {
                        this.state.data.projectsCards.map((card, index) =>
                            <Card className={card.class} body inverse>
                                <center>
                                    <CardImg top width="100%" src={card.image} alt="Card image cap" />
                                </center>
                                <CardBody>
                                    <CardTitle>{card.title}</CardTitle>
                                    <CardText>{card.description}</CardText>
                                    <center>
                                        <Button className={"btn-round " + card.buttonClass}>
                                            {card.button}
                                        </Button>
                                    </center>
                                </CardBody>
                            </Card>
                        )
                    }
                </div>
            </div>
        );
    }

}

Works.defaultProps = {
    en: {
        jumbotron: {
            salutation: 'My Work',
            description: "You can take a look to each of my projects.",
        },
        projects: 'My Projects',
        projectsCards: [
            {
                title: 'Current Work',
                image: require('./../assets/pages/works/espora-estudio.gif'),
                description: 'My current work at Espora Estudio.',
                button: 'Learn About My Work At Espora',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d'
            },
            {
                title: 'Santander Universidades',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'Development of the new Santander Universidades Mexico site.',
                button: 'Learn About Santander Universidades',
                class: 'santander-red-card',
                buttonClass: 'btn-santander-red'
            },
            {
                title: 'Math-3D',
                image: require('./../assets/pages/home/math-3d.jpg'),
                description: 'Collaborator in a AR app for a Math book.',
                button: 'Learn About Math-3D',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d'
            },
            {
                title: 'Iso-Blade',
                image: require('./../assets/pages/works/iso-blade.jpg'),
                description: 'A 3D project to simulate your airfoils.',
                button: 'Learn About Iso-Blade',
                class: 'iso-blade-card',
                buttonClass: 'btn-iso-blade'
            },
            {
                title: 'ExamAdapt',
                image: require('./../assets/pages/home/exam-adapt.jpg'),
                description: 'A new way to apply exams. Each question is a node, and each vertex an answer.',
                button: 'Learn About ExamAdapt',
                buttonClass: 'btn-exam-adapt',
                class: 'exam-adapt-card'
            },
            {
                title: 'Coco Game',
                image: require('./../assets/pages/works/coco-game.png'),
                description: 'A funny app to learn physics and math.',
                button: 'Learn About Coco Game',
                buttonClass: 'btn-coco-game',
                class: 'coco-game-card'
            },
            {
                title: 'Geriatron',
                image: require('./../assets/pages/home/geriatron.jpg'),
                description: 'A webapp to support geriatricians with their patients test.',
                button: 'Learn About Geriatron',
                buttonClass: 'btn-geriatron',
                class: 'geriatron-card'
            }
        ]
    },
    es: {
        jumbotron: {
            salutation: 'Mi Trabajo',
            description: "Puedes ver cada uno de mis trabajos aquí abajo.",
        },
        projects: 'Mis Proyectos',
        projectsCards: [
            {
                title: 'Trabajo Actual',
                image: require('./../assets/pages/works/espora-estudio.gif'),
                description: 'Mi trabajo actual en Espora Estudio.',
                button: 'Descubré mi trabajo en Espora',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d'
            },
            {
                title: 'Santander Universidades',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'Desarrollo del nuevo sitio de Santander Universidades México.',
                button: 'Descubré Santander Universidades',
                class: 'santander-red-card',
                buttonClass: 'btn-santander-red'
            },
            {
                title: 'Math-3D',
                image: require('./../assets/pages/home/math-3d.jpg'),
                description: 'Colaborador en una app de RA para un libro de matemáticas.',
                button: 'Descubré Math-3D',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d'
            },
            {
                title: 'Iso-Blade',
                image: require('./../assets/pages/works/iso-blade.jpg'),
                description: 'Un simulador en 3D de turbinas.',
                button: 'Descubré Iso-Blade',
                class: 'iso-blade-card',
                buttonClass: 'btn-iso-blade'
            },
            {
                title: 'ExamAdapt',
                image: require('./../assets/pages/home/exam-adapt.jpg'),
                description: 'Una nueva forma de aplicar examenes. Cada pregunta es un nodo y cada respuesta un vertice.',
                button: 'Descubré ExamAdapt',
                buttonClass: 'btn-exam-adapt',
                class: 'exam-adapt-card'
            },
            {
                title: 'Coco Game',
                image: require('./../assets/pages/works/coco-game.png'),
                description: 'Una app divertida para aprender física y matemáticas.',
                button: 'Descubré Coco Game',
                buttonClass: 'btn-coco-game',
                class: 'coco-game-card'
            },
            {
                title: 'Geriatron',
                image: require('./../assets/pages/home/geriatron.jpg'),
                description: 'Una aplicación web para ayudar a los geriatras en la aplicación de pruebas a sus pacientes.',
                button: 'Descubré Geriatron',
                buttonClass: 'btn-geriatron',
                class: 'geriatron-card'
            }
        ]
    }
}