import { Link } from "react-router-dom";

function Landing () {
    return (
        <>
            <p>Soy la Landing</p>
            <Link to='/create-card'>Crear tarjeta</Link>
        </>
    )
}

export default Landing;