import React from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class Home extends React.Component {

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
    }

    componentWillReceiveProps(nextProps) {
        const lang = nextProps.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
    }

    redirectTo = () => {
        this.setState({
            target: '/santander-universidades',
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.target} push/>
        }
    }

    render() {
        return (
            <div className="home">
                {this.renderRedirect()}
                <Jumbotron>
                    <h1 className="display-3">{this.state.data.jumbotron.salutation}</h1>
                    <p className="lead">{this.state.data.jumbotron.description}</p>
                    <hr className="my-2" />
                    <p>{this.state.data.jumbotron.readMore}</p>
                    <p className="lead">
                        <Button color="primary">{this.state.data.jumbotron.learnMore}</Button>
                    </p>
                </Jumbotron>
                <div className="projects-label">
                    <center>
                        <h1>{this.state.data.importantProjects}</h1>
                    </center>
                </div>
                <div className="projects">
                    {
                        this.state.data.importantProjectsCards.map((card, index) => 
                            <Card className={card.class} body inverse>
                                <center>
                                    <CardImg top width="100%" src={card.image} alt="Card image cap" />
                                </center>
                                <CardBody>
                                    <CardTitle>{card.title}</CardTitle>
                                    <CardText>{card.description}</CardText>
                                    <center>
                                        <button 
                                            type="button"
                                            className={ "btn-round " + card.buttonClass }
                                            onClick={this.redirectTo}
                                        >
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

Home.defaultProps = {
    en: {
        jumbotron: {
            salutation: 'Hello world!',
            description: "I'm Jacobo, your next fullstack developer with knowledge of videogames, AR and a little bit of music technology.",
            readMore: "I invite you to read more about me...so, just click on the button below.",
            learnMore: "Learn More About Jacobo"
        },
        importantProjects: 'Important Projects',
        importantProjectsCards: [
            {
                title: 'Santander Universidades',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'Development of the new Santander Universidades Mexico site.',
                button: 'Learn About Santander Universidades',
                class: 'santander-red-card',
                buttonClass: 'btn-santander-red',
                link: '/santander-universidades',
            },
            {
                title: 'Math-3D',
                image: require('./../assets/pages/home/math-3d.jpg'),
                description: 'Collaborator in a AR app for a Math book.',
                button: 'Learn About Math-3D',
                class: 'math-3d-card',
                buttonClass: 'btn-math-3d',
                link: '/santander-universidades',
            },
            {
                title: 'ExamAdapt',
                image: require('./../assets/pages/home/exam-adapt.jpg'),
                description: 'A new way to apply exams. Each question is a node, and each vertex an answer.',
                button: 'Learn About ExamAdapt',
                buttonClass: 'btn-exam-adapt',
                class: 'exam-adapt-card',
                link: '/santander-universidades',
            },
            {
                title: 'Geriatron',
                image: require('./../assets/pages/home/geriatron.jpg'),
                description: 'A webapp to support geriatricians with their patients test.',
                button: 'Learn About Geriatron',
                buttonClass: 'btn-geriatron',
                class: 'geriatron-card',
                link: '/santander-universidades',
            }
        ]
    }, 
    es: {
        jumbotron: {
            salutation: '¡Hola mundo!',
            description: "Soy Jacobo, tu próximo desarrollador full stack con conocimientos de videojuegos, RA, y un poco de tecnología musical.",
            readMore: "Te invito a leer más acerca de mí...así que, da click en el botón de abajo.",
            learnMore: "Conoce Más Sobre Jacobo"
        },
        importantProjects: 'Proyectos Importantes',
        importantProjectsCards: [
            {
                title: 'Santander Universidades',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'Desarrollo del nuevo sitio de Santander Universidades México.',
                button: 'Descubré Santander Universidades',
                buttonClass: 'btn-santander-red',
                class: 'santander-red-card',
                link: '/santander-universidades',
            },
            {
                title: 'Math-3D',
                image: require('./../assets/pages/home/math-3d.jpg'),
                description: 'Colaborador en una app de RA para un libro de matemáticas.',
                button: 'Descubré Math-3D',
                buttonClass: 'btn-math-3d',
                class: 'math-3d-card',
                link: '/santander-universidades',
            },
            {
                title: 'ExamAdapt',
                image: require('./../assets/pages/home/exam-adapt.jpg'),
                description: 'Una nueva forma de aplicar examenes. Cada pregunta es un nodo y cada respuesta un vertice.',
                button: 'Descubré ExamAdapt',
                buttonClass: 'btn-exam-adapt',
                class: 'exam-adapt-card',
                link: '/santander-universidades',
            },
            {
                title: 'Geriatron',
                image: require('./../assets/pages/home/geriatron.jpg'),
                description: 'Una aplicación web para ayudar a los geriatras en la aplicación de pruebas a sus pacientes.',
                button: 'Desubré Geriatron',
                buttonClass: 'btn-geriatron',
                class: 'geriatron-card',
                link: '/santander-universidades',
            }
        ]
    }
}