import { Link } from "react-router-dom";
import Card from "../main/Card";
import "../../styles/layout/card.scss";
import Maria from "../../images/Maria-Araujo.jpeg";
import Mariana from "../../images/foto-mariana.jpg";
import monica from "../../images/monica.jpeg";
import celia from "../../images/celia.jpg";


function Landing () {
    const obj1 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'María Araujo',
        job: 'Prueba',
        photo: 'Prueba',
        image: Maria,
    }
    const obj2 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'Mónica Saborido',
        job: 'Prueba',
        photo: 'Prueba',
        image: monica,
    }
    const obj3 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'Celia Ramirez',
        job: 'Prueba',
        photo: 'Prueba',
        image: celia,
    }
    const obj4 = {
        name: 'Tu biblioteca personal' ,
        slogan: '¡Todos tus libros en un click!',
        repo: 'https://github.com',
        demo: 'https://github.com',
        technologies: 'HTML, CSS, JavaScript, React',
        desc: 'Crea listas de todos tus libros y clasifícalos. Puedes marcar libros como léidos, pendientes, prestados. Incluso crear listas de deseos con libros que te gustaría tener!',
        autor: 'Mariana Lobo',
        job: 'Front-end developer',
        photo: 'Prueba',
        image: Mariana,
    }
    return (
        <>
            <section className="landing">
                <article >
                    <h2 className="title">Proyectos Molones</h2>
                    <h3 className="subtitle">Escaparate en línea para recoger ideas a través de la tecnología</h3>

                    <div className="section-btn">
                    <Link className="buttons" to='/create-card'>Nuevo proyecto</Link>
                    <Link className="buttons" to='/'>Ver proyectos</Link>
                    </div>
                </article>

                <div className="landing-card">
                    <Card data={obj1}></Card>
                    <Card data={obj2}></Card>
                    <Card data={obj3}></Card>
                    <Card data={obj4}></Card>
                </div>
            </section>
        </>
    )
}

export default Landing;