import React from 'react';
import {
    FaBriefcase
} from 'react-icons/fa';
import { Jumbotron, Card, Button, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';
import { Redirect } from 'react-router-dom'

//https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math

export default class Works extends React.Component {

    state = {
        redirect: false,
        target: '/'
    }

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

    redirectTo = (target) => {
        window.scrollTo(0, 0);
        this.setState({
            target: target,
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.target} push />
        }
    }

    render() {
        return (
            <div className="my-work">
                {this.renderRedirect()}
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
                                    <center className={card.cardbBottomClass}>
                                        <button className={"btn-round " + card.buttonClass} onClick={() => { this.redirectTo(card.link) }}>
                                            {card.button}
                                        </button>
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
            description: "You can take a look to each of works.",
        },
        projects: 'My Projects',
        projectsCards: [
            {
                title: 'Apple',
                image: require('./../assets/pages/home/apple.jpg'),
                description: 'My work in Safari for MacOS',
                button: ' Know more',
                class: 'apple-card',
                buttonClass: 'btn-apple',
                cardbBottomClass: 'card-bottom-apple',
                link: '/apple'
            },
            {
                title: 'Espora Estudio',
                image: require('./../assets/pages/works/espora-estudio.gif'),
                description: 'My work at Espora Estudio.',
                button: 'Know more',
                class: 'espora-card',
                buttonClass: 'btn-espora',
                cardbBottomClass: 'card-bottom-espora',
                link: '/espora'
            },
            {
                title: 'Santander Universidades',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'Development of the new Santander Universidades Mexico site.',
                button: 'Know more',
                class: 'santander-red-card',
                buttonClass: 'btn-santander-red',
                cardbBottomClass: '',
                link: '/santander-universidades'
            },
            {
                title: 'Math-3D',
                image: require('./../assets/pages/home/math-3d.jpg'),
                description: 'Collaborator in a AR app for a Math book.',
                button: 'Know more',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d btn-espora',
                cardbBottomClass: 'card-bottom-math-iso',
                link: '/math-3d'
            },
            {
                title: 'Iso-Blade',
                image: require('./../assets/pages/works/iso-blade.jpg'),
                description: 'A 3D project to simulate your airfoils.',
                button: 'Know more',
                class: 'iso-blade-card',
                buttonClass: 'btn-iso-blade',
                cardbBottomClass: 'card-bottom-math-iso',
                link: '/iso-blade'
            },
            {
                title: 'ExamAdapt',
                image: require('./../assets/pages/home/exam-adapt.jpg'),
                description: 'A new way to apply exams. Each question is a node, and each vertex an answer.',
                button: 'Know more',
                buttonClass: 'btn-exam-adapt',
                class: 'exam-adapt-card',
                cardbBottomClass: '',
                link: '/examadapt'
            },
            {
                title: 'Coco Game',
                image: require('./../assets/pages/works/coco-game.png'),
                description: 'A funny app to learn physics and math.',
                button: 'Know more',
                buttonClass: 'btn-coco-game',
                class: 'coco-game-card',
                cardbBottomClass: '',
                link: '/coco-game'
            },
            {
                title: 'Geriatron',
                image: require('./../assets/pages/home/geriatron.jpg'),
                description: 'A webapp to support geriatricians with their patients test.',
                button: 'Know more',
                buttonClass: 'btn-geriatron',
                class: 'geriatron-card',
                cardbBottomClass: 'card-bottom-geriatron',
                link: '/geriatron'
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
                title: 'Apple',
                image: require('./../assets/pages/home/apple.jpg'),
                description: 'Mi trabajo en Safari para MacOS',
                button: ' Conoce más',
                class: 'apple-card',
                buttonClass: 'btn-apple',
                cardbBottomClass: 'card-bottom-apple-es',
                link: '/apple'
            },
            {
                title: 'Espora Estudio',
                image: require('./../assets/pages/works/espora-estudio.gif'),
                description: 'Mi trabajo en Espora Estudio.',
                button: 'Conoce más',
                class: 'espora-card',
                buttonClass: 'btn-espora',
                cardbBottomClass: 'card-bottom-espora-es',
                link: '/espora'
            },
            {
                title: 'Santander Universidades',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'Desarrollo del nuevo sitio de Santander Universidades México.',
                button: 'Conoce más',
                class: 'santander-red-card',
                buttonClass: 'btn-santander-red',
                cardbBottomClass: '',
                link: '/santander-universidades'
            },
            {
                title: 'Math-3D',
                image: require('./../assets/pages/home/math-3d.jpg'),
                description: 'Colaborador en una app de RA para un libro de matemáticas.',
                button: 'Conoce más',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d',
                cardbBottomClass: 'card-bottom-math-iso-es',
                link: '/math-3d'
            },
            {
                title: 'Iso-Blade',
                image: require('./../assets/pages/works/iso-blade.jpg'),
                description: 'Un simulador en 3D de turbinas.',
                button: 'Conoce más',
                class: 'iso-blade-card',
                buttonClass: 'btn-iso-blade',
                cardbBottomClass: 'card-bottom-math-iso-es',
                link: '/iso-blade'
            },
            {
                title: 'ExamAdapt',
                image: require('./../assets/pages/home/exam-adapt.jpg'),
                description: 'Una nueva forma de aplicar examenes. Cada pregunta es un nodo y cada respuesta un vertice.',
                button: 'Conoce más',
                buttonClass: 'btn-exam-adapt',
                class: 'exam-adapt-card',
                cardbBottomClass: '',
                link: '/examadapt'
            },
            {
                title: 'Coco Game',
                image: require('./../assets/pages/works/coco-game.png'),
                description: 'Una app divertida para aprender física y matemáticas.',
                button: 'Conoce más',
                buttonClass: 'btn-coco-game',
                class: 'coco-game-card',
                cardbBottomClass: '',
                link: '/coco-game'
            },
            {
                title: 'Geriatron',
                image: require('./../assets/pages/home/geriatron.jpg'),
                description: 'Una aplicación web para ayudar a los geriatras en la aplicación de pruebas a sus pacientes.',
                button: 'Conoce más',
                buttonClass: 'btn-geriatron',
                class: 'geriatron-card',
                cardbBottomClass: 'card-bottom-geriatron-es',
                link: '/geriatron'
            }
        ]
    }
}