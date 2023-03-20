import { Link } from "react-router-dom";
import Card from "../main/Card";
// import "../../styles/layout/preview.scss";
import "../../styles/layout/card.scss";


function Landing () {
    const obj1 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'Prueba',
        job: 'Prueba',
        image: 'Prueba',
        photo: 'Prueba',
    }
    const obj2 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'Prueba',
        job: 'Prueba',
        image: 'Prueba',
        photo: 'Prueba',
    }
    const obj3 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'Prueba',
        job: 'Prueba',
        image: 'Prueba',
        photo: 'Prueba',
    }
    const obj4 = {
        name: 'Nombre' ,
        slogan: 'Prueba',
        repo: 'Prueba',
        demo: 'Prueba',
        technologies: 'Prueba',
        desc: 'Prueba',
        autor: 'Prueba',
        job: 'Prueba',
        image: 'Prueba',
        photo: 'Prueba',
    }
    return (
        <>
            <section className="landing">
                <article >
                    <h2 className="title">Proyectos Molones</h2>
                    <h3 className="subtitle">Escaparate en línea para recoger ideas a través de la tecnología</h3>

                    <div className="section-btn">
                    <Link className="buttons-img" to='/create-card'>Nuevo proyecto</Link>
                    <Link className="buttons-img" to='/'>Ver proyectos</Link>
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