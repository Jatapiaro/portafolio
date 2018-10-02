import React from 'react';
import ProjectIntroduction from './../../components/ProjectIntroduction';
import AboutProject from './../../components/AboutProject';

export default class Geriatron extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
        this.props.toggleNavbarClass('geriatron-navbar');
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
            <div className="geriatron">
                <ProjectIntroduction
                    data={this.state.data.projectIntroduction}
                />
                <AboutProject data={this.state.data.about} />
            </div>
        );
    }

}

Geriatron.defaultProps = {
    en: {
        projectIntroduction: {
            title: "Geriatron",
            introduction: "A webapp to support geriatricians on the application of test to their patients. Currently is used in two hospitals in Mexico",
            link: undefined,
            linkLabel: 'here',
            image: require('./../../assets/pages/home/geriatron.jpg')
        },
        about: [
            {
                type: 'text',
                data: 'Geriatron was developed in 2016 for the geriatric area of two hospital in Mexico. These hospitals are the Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán and the Hospital General de México. A non functional requirement of this project, was to be developed using Java, so the technology used was JSF +  PrimeFaces. '
            },
            {
                type: 'text',
                data: 'Geriatron allows the doctors to create patients and for each of these patients keep a record of the test that they apply to them. Each of these tests maintain an historical record, allowing the doctor to review all the applications that have been done and when were applied. This helps the doctors in many ways. One of them is that now the doctors don’t have to preserve thousand of test in paper of all their patients, just consider that for each visit of the patient that had to apply all the test again, and it was a 16 pages pdf. Another thing is that many of the test have evaluations that can be a a letter of a number. Now this evaluations are calculated in real time with each input of the doctor. Finally for each test, the doctor have a confirmation screen in which he sees all the information that he recovered and check that everything is ok before save it.'
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/1.png')
            },
            {
                type: 'text',
                data: 'On the image above, we can see the patient profile screen, where the doctor sees the important information about the patient, and also all the dropdowns that represent one of the different tests. '
            },
            {
                type: 'text',
                data: 'In the next image we can see an example of a test registration.'
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/2.png')
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/3.png')
            },
            {
                type: 'text',
                data: 'Finally, we can see one of those dropdowns open, letting us see the results of one of the tests. '
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/4.png')
            },
            {
                type: 'text',
                data: "Another important thing is that the project was showed to people during his social service to attend at houses of people who, due to his medical condition, can't go out of home."
            },
            {
                type: 'text',
                data: 'In april of 2017, a new module was added to the system. This module enable the user to export the results on a PDF. To fill this report, we took from each test, the most recent application to appear on the report. This module was built using Jasper Reports.'
            },
        ]
    },
    es: {
        projectIntroduction: {
            title: "Geriatron",
            introduction: "Una aplicación web para apoyar a los geriatras en la aplicación de pruebas a sus paciente. Actualmente es usado en dos hospitales en México",
            link: undefined,
            linkLabel: 'aquí',
            image: require('./../../assets/pages/home/geriatron.jpg')
        },
        about: [
            {
                type: 'text',
                data: 'Geriatron se desarrolló en 2016 para el área de geriatría de dos hospitales en México.  Dichos hospitales son el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán y el Hospital General de México. Geriatron fue desarrollado utilizando JSF + PrimeFaces. Esto debido a que era un requerimiento no funcional que el proyecto se llevará a cabo en Java.'
            },
            {
                type: 'text',
                data: 'En Geriatron, se permite que los doctores creen pacientes y de cada uno de estos llevar registros de las pruebas que se les aplican. Cada una de las pruebas tiene un histórico, permitiendo que el doctor pueda ver todas las aplicaciones que se han hecho de dicha prueba y cuando fueron aplicadas. Además de esto ayuda a los doctores a no conservar una gran cantidad de pruebas en papel, pues por cada visita debían guardar alrededor de 16 hojas con todas las pruebas. Otro punto importante es que muchas de las pruebas tiene distintas evaluaciones de acuerdo a los resultados, que pueden ir desde una evaluación numérica o con una letra, y cada resultado podía dar algún diagnóstico. En tiempo real, mientras el doctor aplica la prueba se van actualizando automáticamente estos datos para que no tenga que realizar ningún cálculo. Finalmente para cada prueba, antes de guardarla se muestra una pantalla de confirmación con todos los datos recabados, para que el doctor verifique que todo esté correcto antes de guardar.'
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/1.png')
            },
            {
                type: 'text',
                data: 'En la imagen anterior podemos observar como se ve la pantalla de información del paciente, la cual cuenta con dropdowns que despliegan la información de cada una de las pruebas.'
            },
            {
                type: 'text',
                data: 'A continuación podemos ver un ejemplo del registro de una prueba.'
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/2.png')
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/3.png')
            },
            {
                type: 'text',
                data: 'Finalmente podemos ver uno de los dropdowns abiertos, permitiendo ver los resultados recabados de una prueba.'
            },
            {
                type: 'image',
                data: require('./../../assets/pages/projects/geriatron/4.png')
            },
            {
                type: 'text',
                data: 'Otro punto importante de este proyecto es que también fue presentado a gente que estaba en su servicio social, cuya función era ir a las casas de personas que por condición médica no podían salir de sus hogares, o gente que no podía asistir a un doctor.'
            },
            {
                type: 'text',
                data: 'A principios de 2017 se añadió al sistema un nuevo módulo para exportar los resultados a un PDF. Dicho PDF, tomaba de cada prueba, la aplicación más reciente para ser incluida en el reporte. Este módulo se realizó utilizando Jasper Reports.'
            }
        ]
    }
}