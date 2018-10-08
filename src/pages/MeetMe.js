import React from 'react';
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
                                <br />
                                <span>
                                    <a target="_blank" href="https://github.com/Jatapiaro"><FaGithub size={"1.5em"} /></a>
                                    <a className="bitbucket" target="_blank" href="https://bitbucket.org/jatapiaro/"><FaBitbucket size={"1.5em"} /></a>
                                    <a className="stack-overflow" target="_blank" href="https://stackoverflow.com/users/9422114/jacobo-tapia"><FaStackOverflow size={"1.5em"} /></a>
                                    <a className="youtube" target="_blank" href="https://www.youtube.com/channel/UCGY6v72JuKEmi2zMWzI8VSg"><FaYoutube size={"1.5em"} /></a>
                                    <a className="resume" target="_blank" href="https://drive.google.com/file/d/154NcnOwPKegqhcOP-n6wJuUhqOWN8cSY/view?usp=sharing"><FaFile size={"1.5em"} /></a>
                                    <a className="google" target="_blank" href="http://www.letmegooglethat.com/?q=Jatapiaro"><FaGoogle size={"1.3em"} /></a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-me container">
                    {
                        this.state.data.aboutMe.map((p, index) =>
                            <p key={index}>{p}</p>
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
            'He studied a B.S. Computer Science and Technology at the Tecnológico de Monterrey. He graduated in May of 2018.',
            'One of his biggest passions is music, his favorite band is Radiohead, and because of that he is also fan of traveling around the world attending concerts, play guitar or piano, learn about music technology like Supercollider or MIDI systems. Also he loves videogames and the development of them. This makes that Jacobo is constantly learning new technologies and making experiments with them. Jacobo dreams to dedicate full time as a videogame developer.',
            'Jacobo’s career started in the second half of 2015. Back then, he developed a webapp for a transport company known as “Transportes Rizo”. With this system, the people in charge can manage their trips, the drivers, and also calculate automatically the cost of the travels, and also know the status of them. ',
            'Then, in the early 2016, he started to develop a system for an university class. This project won to be used in production for two hospitals in Mexico. This project, known as Geriatron is currently used in the “Hospital General de México” and the “Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán”. The objective of this project is to support geriatricians on their test that they apply to their patients. This helps the doctor to keep a historical records of these test, and also making automatically  all the calculations that the doctor have to do. Finally this project is used by people during his social service, visiting people that, because his medical condition, can’t go out of their home, so volunteers go to their houses to apply this tests.',
            'After Geriatron, Jacobo was invited to participate on the develop of a project that the Math department of the Tecnológico de Monterrey wants. This project is called ExamAdapt. The idea of this project is a space in which the professors can create groups, questions and questionnaires to evaluate his students. These questionnaires have an special feature. Each question is a node, and each answer a vertex. The professor has the necessary tools to create their questionnaires with a GUI; connecting each new answer with a new question, to finally take the student to an state of Approved or Failed.',
            'Thanks to ExamAdapt, Jacobo was recommended to develop one of the most interesting projects in which he has been involved. IsoBlade, tried to be an airfoil simulator. The simulator goes from the creation of an airfoil, to the application of different calculus to evaluate the energy generated, the waste of the airfoil, the action of the wind with the airfoil and the display of these results in 3D. The project had different stages. An early one which was developed with Matlab. Then we changed and almost made all the progress from scratch in Python, and using Kivy as our GUI framework. Then we re-built it using Julia as a backend and Unity3D as our GUI and 3D display. Finally we changed everything and started from scratch with C++ to take advantage of OpenGL and real time rendering to show all the computations. Unfortunately this project was cancelled after the Mexico earthquake in 2017.',
            'In august of 2018, Jacobo developed the new site of Santander Universidades Mexico. This project was built with no framework due to the permissions granted to Jacobo and also the server characteristic. So it was built as an static HTML with CSS and some JS libraries like Handlebars. In July of 2018, Jacobo learnt React, and think about a remastered site using React. This because the project started to become hard to add new pages or update due to lot of redundant things. For example, If he added a new page, he has to modify the same mau in all the 30 existing pages. The he remember the characteristics of the server, so in order to use React to built an static HTML site, he used GatsbyJS to achieve this. So now, the currently Santander Universidades site, is the one build with React.',
            'Actually, Jacobo works at Espora Estudio, where he has been working mainly as a web developer. He had realized projects like Dance Generation, which was a dance contest in social media. Inome, an iOS application developed with Ionic to help people in their process of reflection. HUMI, a telegram bot for the Bayer RH area. And finally GOAL, which is a project that aims to disseminate logistics knowledge in a new and fun way.',
            'If you reached to the end, Jacobo is really grateful because you take time to learn more about his developer history. If you are interested to get in touch with him, please go to the contact section to look all the ways that you have to say “Hi” to him. THANK YOU SO MUCH!'
        ]
    }, 

    es: {
        whoIsJacobo: '¿Quién es Jacobo?',
        introduction: 'Jacobo es un ingeniero con experiencia en desarrollo web. El puede ser tu siguiente desarrollador full stack. Además tiene experiencia desarrollando videojuegos en unity, realidad aumentada y un poco de tecnología musical. Puedes conocer más acerca del trabajo de Jacobo en los siguientes links:',
        aboutMe: [
            'Estudió en el Tecnológico de Monterrey la carrera de Ingeniería en Tecnologías Computacionales, de la cual, egresó en Mayo de 2018.',
            'Una de sus grandes pasiones es la música, su banda favorita es Radiohead, y por lo tanto dentro de sus hobbies está viajar para ir a conciertos, tocar el piano o la guitarra, aprender tecnología musical como lo es Supercollider o sistemas MIDI y los videojuegos y el desarrollo de los mismos. Por lo tanto está constantemente aprendiendo nuevas tecnologías y experimentando con ellas. A Jacobo le gustaría en algún momento, dedicarse de tiempo completo al desarrollo de videojuegos.',
            'La carrera de Jacobo como desarrollador comienza a finales de 2015, cuando desarrolla para una empresa de transportes “Transportes Rizo”, un sistema web en el cual los encargados pueden administrar sus viajes, asignar conductores, así como calcular automáticamente los costos de los viajes y conocer el estatus de los mismos.',
            'Posteriormente a principios de 2016, comenzó a desarrollar un sistema para una clase de la universidad. Dicho proyecto ganaría para ser utilizado en producción en dos hospitales de México. Este proyecto, conocido como Geriatron, es actualmente utilizado en el Hospital General de México y el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán. El objetivo de este proyecto es apoyar a los geriatras en las pruebas que aplican a sus pacientes, ayudándoles a mantener un historial de todas las pruebas y que las evaluaciones y cálculos se realicen de manera automática. Finalmente personas en su servicio social, pueden acudir a las casas de las personas que por cuestiones médicas, no pueden salir de su hogar, a aplicar dichas pruebas.',
            'Tras este proyecto, Jacobo fue invitado a participar en el desarrollo de un proyecto que el departamento de Matemáticas del Tecnológico de Monterrey campus Ciudad de México quería llevar a cabo. Este proyecto se conoce como ExamAdapt. La idea de ExamAdapt es un espacio donde los profesores pueden crear grupos, preguntas y cuestionarios para evaluar a sus alumnos. Sin embargo los cuestionarios/exámenes tienen una característica peculiar; estos son un grafo, donde cada nodo es una pregunta y cada vértice una respuesta. El profesor tiene las herramientas para crear de manera visual su exámen, conectando cada respuesta a una nueva pregunta o a un estado de Aprobado o Reprobado.',
            'Debido al proyecto de ExamAdapt, Jacobo fue recomendado para llevar a cabo uno de los proyectos más interesantes que ha tenido. IsoBlade, el cual buscaba ser un simulador de turbinas. Por lo tanto partía desde la creación de una turbina, así como la aplicación de cálculos relacionados con el desgaste, la cantidad de energía, viento y el despliegue en 3D de estos datos. El proyecto pasó por muchas etapas, la primera fue desarrollada en Matlab, posteriormente pasó a trabajar casi desde cero en Python, utilizando Kivy para las interfaces gráficas. Posteriormente se migró a Unity3D para desplegar el contenido y Julia como backend para realizar todos los cálculos. Debido a lo que el proyecto buscaba finalmente se decidió utilizar C++ completamente, permitiendo usar OpenGL para aprovechar el rendereo en tiempo real que se deseaba. Lamentablemente este proyecto fue cancelado tras el sismo del 19 de Septiembre de 2017.',
            'Durante agosto de 2018, Jacobo llevó a cabo la construcción del nuevo sitio de Santander Universidades México. Este proyecto, debido a las características del servidor y los permisos que le fueron otorgados, solo permitía subir un proyecto estático de HTML con su respectivo JS y CSS. Por lo tanto la primera versión de este proyecto fue desarrollada sin ningún framework; no fue hasta Julio de 2018, cuando Jacobo aprendió React, y se dió cuenta de que el proyecto de Santander Universidades podría ser reconstruido en React, evitando así las redundancias y repeticiones de componentes, así como la tarea tan pesada que se había convertido hacer cambios, o agregar nuevo contenido a la página. Sin embargo, recordando las características del servidor, sabía que debía ser un sitio estático de HTML. Aquí recurrió a GatsbyJS para ayudarle a realizar está tarea, y por lo tanto la versión actual en producción es aquella que está desarrollada con React.',
            'Actualmente Jacobo trabaja en Espora Estudio, en donde se ha dedicado casi en su totalidad al desarrollo web. Realizando desde proyectos como Dance Generation, el cual fue un concurso de baile llevado a cabo en redes sociales. Inome, el cual fue una aplicación desarrollada en Ionic, y con la cual, se busca ayudar a las personas en su proceso de reflexión. HUMI, un bot de telegram para el área de recursos humanos de Bayer. Y finalmente GOAL, el cual es un proyecto que tiene como objetivo difundir conocimientos logísticos de una forma nueva y divertida.',
            'Si leíste hasta el final, Jacobo está muy agradecido de que hayas tomado el tiempo para conocer su historia como desarrollador. ¡Muchas Gracias!'
        ]
    },

}