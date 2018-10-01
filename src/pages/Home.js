import React from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

export default class Home extends React.Component {

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

    render() {
        return (
            <div className="home">
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
                            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                <CardImg top width="100%" src={card.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{card.title}</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Button</Button>
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
                title: 'Special Title Treatment 1',
                image: require('./../assets/pages/home/santander-universidades.png'),
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
            },
            {
                title: 'Special Title Treatment 2',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
            },
            {
                title: 'Special Title Treatment 3',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
            },
            {
                title: 'Special Title Treatment 4',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
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
                title: 'Titulo de trat especial',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
            },
            {
                title: 'Titulo de trat especial',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
            },
            {
                title: 'Titulo de trat especial',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Learn More',
                class: 'santander-red-card'
            },
            {
                title: 'Titulo de trat especial',
                image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
                description: 'With supporting text below as a natural lead-in to additional content.',
                button: 'Conoce Más',
                class: 'santander-red-card'
            }
        ]
    }
}