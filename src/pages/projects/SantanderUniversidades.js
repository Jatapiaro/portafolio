import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';

export default class SantanderUniversidades extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('santander-navbar');
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
            <div className="santander-universidades">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <div className="container about-project">
                    {
                        this.state.data.about.map((p, index) => 
                            <p key={index}>{p}</p>
                        )
                    }
                </div>
            </div>
        );
    }

}

SantanderUniversidades.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Santander Universidades",
            introduction: "In 2017 I developed the new Santander Universidades site, which I invite you to checkout ",
            link: 'http://santanderuniversidades.com.mx',
            linkLabel: 'here', 
            image: require('./../../assets/pages/home/santander-universidades.png')
        },
        about: [
            'In august of 2017 I was invited to develop the new “Santander Universidades” site. This project was on a critical state and we can say that also, this was an urgent project. This because the people in charge quit and took off all the code that he had.',
            'In this project, I was not granted with all the necessary permissions on the server. I just have FTP access. Also they wanted the project in just one week, and they expected that all the code was installed on a server with wordpress. So, taking this in account I developed the whole site with just HTML, CSS and JS. Also I take advantage of some libraries like bootstrap, jquery and handlebars.',
            'Then, an extra module was added outside the main page. This was like a blog for the people in charge of the “News” section of the page. In this other site, the people in charge can create, modify and delete all the news that will appear on the main site.',
            'With the time, this project was really hard to maintain, add new changes, create new pages, etc., made that we have to change a lot of redundant things along the code. For example, If I added a new page, I have to modify the menu in all the existing pages. So, when I learnt React, I think that the project could be rebuilded using React. Then I investigate how to convert a React site into an static HTML site, and finally get to GatsbyJS.',
            'Finally, If you access the site, you will find the last version, the one created with GatsbyJS and published in august of 2018.'
        ]
    },
    es: {
        projectIntroduction: {
            title: "Santander Universidades",
            introduction: "En 2017 desarrolle el nuevo sitio de Santander Universidades, el cual, te invito a conocer ",
            link: 'http://santanderuniversidades.com.mx',
            linkLabel: 'aquí', 
            image: require('./../../assets/pages/home/santander-universidades.png')
        },
        about: [
            'En agosto de 2017 fui invitado a desarrollar el nuevo sitio de Santander Universidades. Este proyecto, estaba en un estado crítico, y podemos decir que de urgencia, pues la persona que se estaba encargando de llevarlo a cabo, renunció y no dejó nada de su código.',
            'En este proyecto tuve restricciones de permisos en el servidor, pues solo me otorgaron acceso por FTP, y todo el código debía ser puesto encima de un proyecto que esperaba ser Wordpress. Así que, inicialmente, realice todo el proyecto sin ningún framework, únicamente se utilizo HTML, CSS y JS. Incluyendo librerías como bootstrap, jquery y handlebars. El proyecto fue desarrollado en tan solo una semana.',
            'Además se añadió un módulo extra, fuera de la página, para que el encargado de las noticias, pudiera administrarlas, desde crearlas, modificarlas y eliminarlas. Cada una de esas noticias, se muestra en la sección “Noticias” del sitio.',
            'Posteriormente, el proyecto se volvió complicado de mantener, agregar nuevas cosas, cambios o nuevas páginas, hacía que se tuviera que cambiar muchas cosas redundantes a lo largo del código. Por ejemplo, el menú, que cada que se añadía una nueva página, se debía cambiar el menú en todas las demás páginas. Por lo tanto cuando comencé a trabajar en React, me di cuenta de que muchas cosas del proyecto se podían separar en componentes ( pues realmente hay muchas cosas que se repiten ). Sin embargo, considerando las limitaciones de tener un sitio HTML estático, utilice GatsbyJS para ayudarme con esta tarea.',
            'Finalmente, si accedes al sitio, podrás encontrar la última versión, la cual fue hecha desde cero utilizando GatsbyJS y publicada en Agosto de 2018.'
        ]
    }
}