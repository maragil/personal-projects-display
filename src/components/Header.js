import logoAdalab from "../images/logo-adalab.png";
function Header() {
    return (
        <header className='header'>
            <i className='fa-solid fa-laptop-code header__icon'></i>
            <p className='header__text'>Proyectos Molones</p>
            <img className='header__logo--adalab' src={logoAdalab} alt='Imagen de Adalab' />
        </header>
    );
}

export default Header;