import React, { Fragment } from 'react';
import { 
    FaGithub, 
    FaBitbucket, 
    FaFile,
    FaGoogle, 
    FaStackOverflow,
    FaYoutube } from 'react-icons/fa';

export default class MeetMe extends React.Component {

    state = {
        data: {}
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
            <div className="meet-me">
                <div className="my-container">
                    
                    <div className="introduction">
                        <div>
                            <img src="https://pbs.twimg.com/profile_images/777287453900013568/2ET2ftFr_400x400.jpg"></img>
                        </div>
                        <div>
                            <h1>{this.state.data.whoIsJacobo}</h1>
                            <p>
                                {this.state.data.introduction}
                                <br /><br/>
                                <span>
                                    <a target="_blank" href="https://github.com/Jatapiaro"><FaGithub size={"1.5em"} /></a>
                                    <a className="bitbucket" target="_blank" href="https://bitbucket.org/jatapiaro/"><FaBitbucket size={"1.5em"} /></a>
                                    <a className="stack-overflow" target="_blank" href="https://stackoverflow.com/users/9422114/jacobo-tapia"><FaStackOverflow size={"1.5em"} /></a>
                                    <a className="youtube" target="_blank" href="https://www.youtube.com/channel/UCGY6v72JuKEmi2zMWzI8VSg"><FaYoutube size={"1.5em"} /></a>
                                    <a className="resume" target="_blank" href="https://drive.google.com/file/d/1m9wahXDplvjf7n0mIuw2k2Rotn0DlU1-/view?usp=sharing"><FaFile size={"1.5em"} /></a>
                                    <a className="google" target="_blank" href="http://www.letmegooglethat.com/?q=Jatapiaro"><FaGoogle size={"1.3em"} /></a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-me container">
                    {
                        this.state.data.aboutMe.map((p, index) =>
                            <div dangerouslySetInnerHTML={{__html: p}} key={index}/>
                        )
                    }
                </div>
            </div>
        );
    }

}

MeetMe.defaultProps = {

    en: {
        whoIsJacobo: 'Who is Jacobo?',
        introduction: 'Jacobo is an engineer with experience in web development. He could be your next full stack developer. Also he has experience in video game development with Unity, augmented reality and a little bit of music technology. You can learn more about Jacobo’s work in the following links:',
        aboutMe: [
            `<p>He studied a B.S. Computer Science and Technology at the Tecnológico de Monterrey. He graduated in May of 2018.</p>`,
            
            `<div>
                <p>Jacobo likes/wants:</p>
                <ul>
                    <li>Radiohead</li>
                    <li>Videogames</li>
                    <li>Playing Guitar</li>
                    <li>Music technology, programming on SuperCollider or some MIDI systems</li>
                    <li>Wants to make a videogame in his free time</li>
                </ul>
            </div>`,

            `<p>Jacobo’s career started in the second half of 2015. Back then, he developed a webapp for a transport company known as “Transportes Rizo”. With this system, the people in charge can manage their trips, the drivers, and also calculate automatically the cost of the travels, and also know the status of them.</p>`,

            `<p>After this, during February of 2016, he collaborated with the department of mathematics of his college to develop a web application that acts as a game with the goal of teaching physics and math to the students in a funny way. There is a <a href="https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math">paper</a> written about the project.</p>`,

            `<p>Then, in the early 2016, he started to develop a system for an university class. This project won to be used in production for two hospitals in Mexico. This result, known as Geriatron was used in the “Hospital General de México” and the “Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán”. The objective of this project is to support geriatricians on their test that they apply to their patients. This helps the doctor to keep a historical records of these test, and also making automatically  all the calculations that the doctor have to do. Finally the project was used by medicine students during his social service; in a program that visited people that, due to their medical condition couldn't get out of home.</p>`,

            `<p>After Geriatron, Jacobo was invited to participate on the develop of a project that the Math department of the Tecnológico de Monterrey wants. This project is called ExamAdapt. The idea of this project is a space in which the professors can create groups, questions and questionnaires to evaluate his students. These questionnaires have an special feature. Each question is a node, and each answer a vertex, thus each test is a graph. The professor has the necessary tools to create their questionnaires in a GUI that allows them to connect each answer of a question with another question, which leads to a final node that gives the students an state of Approved or Failed.</p>`,

            `<p>Thanks to ExamAdapt, Jacobo was recommended to develop one of the most interesting projects in which he has been involved. IsoBlade, tried to be an airfoil simulator. The simulator went from creating the airfoils, to apply different calculations related to the energy generated by the turbine, the waste that the airfoil will have with the time, and how it interacts with the wind. But the most important part, it was that the program should be able to display the results in 3D. The project went through several stages. An early version of it was developed in Matlab, which ended up being translated to Python and adding the user interface with the Kivy framework. After this, we started to work on a new version, which splits the project in a Julia backend which makes all the math, and a Unity3D program that displayed the results from the backend. Finally, the team ended up changing everything and started from scratch in C++ to use OpenGL in order to be able to do some real time rendering of all the computations. Unfortunately, this project was cancelled after the Mexico earthquake in 2017.</p>`,

            `<p>In August of 2017, Jacobo developed the new site of Santander Universidades Mexico. The project was originally made with no framework at all. It was using static HTML, CSS and some JS libraries like handlebars. The reason of this was due to a lack of access to the deployment server in which he was only able to upload files via FTP and the technologies in the server was not know. Then in July of 2018, Jacobo learnt React, and he thought about redo the website with React, since adding new pages, update them or delete them started to become really hard due to all the redundant code. For example, if a page was added or deleted from the page, we need to modify the navbar from all the files in the code. Then he had the restrictions of the server, so in order to use React to build a static HTML site, he used GatsbyJS to achieve this. Finally, during 2019, Jacobo was granted access to the server, and he was able to migrate the site to WordPress, which helped him with the newer SEO requirements of the website.</p>`,

            `<p>But a few months before started with Santander Universidades (which was a parallel project), Jacobo started to Work in Espora Estudio, where he worked mainly as a web developer, realizing projects like Dance Generation (an online dance contest webpage)', <a href="http://inomeapp.com">Inome</a> (an iOS application developed in Ionic) that helps people in the process of reflection, HUMI (a Telegram bot for the HR area of Bayer), <a href="https://goalproject.co/why-goal">GOAL</a> (a platform for teachers), Omega (a website for a real state agency), and finally SuperAR Location, and iOS AR application that uses ARKit and Core Location to show some monuments of Mexico City</p>.`,

            `<p>At the same time, during 2018, Jacobo collaborated with a professor of his university to develop an AR application using Unity and Vuforia. The prototype tried to demonstrate how the application could be included on a math book to allow the students to see graphs of the equations with AR in their phones.</p>`,

            `<p>During 2019, Jacobo gave the Computational Thinking course at the highschool of the Instituto Tecnológico de Monterrey, in which his students developed different applications in App Inventor to with a problem of their communities.</p>`,

            `<p>Right now, Jacobo works at Apple in the Safari for MacOS team.</p>`,
        ]
    }, 

    es: {
        whoIsJacobo: '¿Quién es Jacobo?',
        introduction: 'Jacobo es un ingeniero con experiencia en desarrollo web. El puede ser tu siguiente desarrollador full stack. Además tiene experiencia desarrollando videojuegos en unity, realidad aumentada y un poco de tecnología musical. Puedes conocer más acerca del trabajo de Jacobo en los siguientes links:',
        aboutMe: [
            `<p>Estudió en el Tecnológico de Monterrey la carrera de Ingeniería en Tecnologías Computacionales, de la cual, egresó en Mayo de 2018.</p>`,

            `<div>
                <p>A Jacobo le gusta/quiere:</p>
                <ul>
                    <li>Radiohead</li>
                    <li>Videojuegos</li>
                    <li>Tocar la guitarra</li>
                    <li>La tecnología músical y el desarrollo de Sistemas MIDI así como programar en SuperCollider</li>
                    <li>Quiere hacer un videojuego en su tiempo libre</li>
                </ul>
            </div>`,

            `<p>La carrera de Jacobo como desarrollador comienza a finales de 2015, cuando desarrolla para una empresa de transportes “Transportes Rizo”, un sistema web en el cual los encargados pueden administrar sus viajes, asignar conductores, así como calcular automáticamente los costos de los viajes y conocer el estatus de los mismos.</p>`,

            `<p>Después, en febrero de 2016, colaboró con el departamento de matemáticas de su universidad para desarrollar una aplicación web que tiene la intención de ser un juego para que los estudiantes aprendan de matemáticas y física de una forma divertida. Existe un <a href="https://www.researchgate.net/publication/321813688_CocoGame_A_funny_app_to_learn_physics_and_math">paper</a> acerca del proyecto.</p>`,

            `<p>Posteriormente a principios de 2016, comenzó a desarrollar un sistema para una clase de la universidad. Dicho proyecto ganaría para ser utilizado en producción en dos hospitales de México. Este proyecto, conocido como Geriatron, fue utilizado en el Hospital General de México y el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán. El objetivo del proyecto era apoyar a los geriatras en las pruebas que aplican a sus pacientes, ayudándoles a mantener un historial de todas las pruebas y que las evaluaciones y cálculos sean realizados de forma automática. Finalmente estudiantes de medicina durante su servicio social, acudieron a las casas de las personas que por cuestiones médicas, no podían salir de su hogar, a aplicar dichas pruebas.</p>`,

            `<p>Tras este proyecto, Jacobo fue invitado a participar en el desarrollo de un proyecto que el departamento de Matemáticas del Tecnológico de Monterrey campus Ciudad de México quería llevar a cabo. Este proyecto se conoce como ExamAdapt. La idea de ExamAdapt es un espacio donde los profesores pueden crear grupos, preguntas y cuestionarios para evaluar a sus alumnos. Sin embargo los cuestionarios/exámenes tienen una característica peculiar; estos son un grafo, donde cada nodo es una pregunta y cada vértice una respuesta. El profesor tiene las herramientas para crear de manera visual su exámen, conectando cada respuesta a una nueva pregunta o a un estado de Aprobado o Reprobado</p>`,

            `<p>Debido al proyecto de ExamAdapt, Jacobo fue recomendado para llevar a cabo uno de los proyectos más interesantes que ha tenido. IsoBlade, el cual buscaba ser un simulador de turbinas. Por lo tanto partía desde la creación de una turbina, así como la aplicación de cálculos relacionados con el desgaste, la cantidad de energía, viento y el despliegue en 3D de estos datos. El proyecto pasó por muchas etapas, la primera fue desarrollada en Matlab, posteriormente pasó a trabajar casi desde cero en Python, utilizando Kivy para las interfaces gráficas. Posteriormente se migró a Unity3D para desplegar el contenido y Julia como backend para realizar todos los cálculos. Debido a lo que el proyecto buscaba finalmente se decidió utilizar C++ completamente, permitiendo usar OpenGL para aprovechar el rendereo en tiempo real que se deseaba. Lamentablemente este proyecto fue cancelado tras el sismo del 19 de Septiembre de 2017.</p>`,

            `<p>Durante agosto de 2017, Jacobo llevó a cabo la construcción del nuevo sitio de Santander Universidades México. Este proyecto, debido a las características del servidor y los permisos que le fueron otorgados, solo permitía subir un proyecto estático de HTML con su respectivo JS y CSS. Por lo tanto la primera versión de este proyecto fue desarrollada sin ningún framework; no fue hasta Julio de 2018, cuando Jacobo aprendió React, y se dió cuenta de que el proyecto de Santander Universidades podría ser reconstruido en React, evitando así las redundancias y repeticiones de componentes, así como la tarea tan pesada que se había convertido hacer cambios, o agregar nuevo contenido a la página. Sin embargo, recordando las características del servidor, sabía que debía ser un sitio estático de HTML. Aquí recurrió a GatsbyJS para ayudarle con dicha tarea. A inicios de 2019, Jacobo obtuvó los permisos del servidor y migró el sitio a WordPress, con el fin de cumplir con los nuevos requerimientos de SEO del mismo.</p>`,

            `<p>Unos meses antes de comenzar a trabajar en Santander Universidades (el cual era un projecto paralelo), Jacobo comenzó a trabajar en Espora Estudio, donde se desarrolló principalmente como un desarrollador web; realizando proyectos como Dance Generation (un concurso de baile online), <a href="http://inomeapp.com">Inome</a> (una aplicación de iOS desarrollada en Ionic) para ayudar a las personas en el proceso de reflexión, HUMI (un bot de Telegram para el área de RH de Bayer), <a href="https://goalproject.co/why-goal">GOAL</a> (una plataforma para profesores), Omega (un sitio web para una agencia de bienes raices) y finalmente SuperAR Location, la cual fue una aplicación de iOS que integraba ARKit y Core Location para mostrar monumentos de la Ciudad de México.`,

            `<p>Al mismo tiempo y durante 2018, Jacobo colaboró con profesores de su universidad para desarrollar una aplicación de RA utilizando Unity y Vuforia. El prototipo, pretendía demostrar cómo dicha aplicación podría ser incluida en un libro de matemáticas, permitiendo a los estudiantes ver las gráficas de las ecuaciones con realidad aumentada desde sus teléfonos.</p>`,

            `<p>Durante 2019, Jacobo dió el curso de Pensamiento Computacional en la preparatoria del Instituto Tecnológico de Monterrey; curso en el que sus alumnos desarrollaron aplicaciones en App Inventor con el fin de resolver problemas de su comunidad.</p>`,

            `<p>Actualmente, Jacobo trabaja en Apple y forma parte del equipo de Safari para MacOS.</p>`,
        ]
    },

}