import { MainNavStyled } from './MainNavStyled';
import { ShoppingCart } from '../index';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/index';
import './MainNavCss.css';

export const MainNav = () => {
  // Cargamos contexto
  const authContext = useAuthContext();

  const showNavMobile = () => {
    const topNav = document.getElementById('myTopnav');
    if (
      topNav.className === 'topnav' &&
      window.matchMedia('(max-width: 768px)').matches
    ) {
      topNav.className += ' showed';
    } else {
      topNav.className = 'topnav';
    }
  };
  return authContext.userProfile ? (
    <MainNavStyled>
      <div className="topnav" id="myTopnav">
        <a href="#" className="icon" onClick={showNavMobile}>
          Menú
        </a>
        <div className="navLinks">
          <Link
            to={`/user/${authContext.userProfile.nickname}`}
            onClick={showNavMobile}
          >
            Perfil
          </Link>
          <Link
            to={'/'}
            onClick={() => {
              showNavMobile();
              authContext.userLogout();
            }}
          >
            Logout
          </Link>
          <Link to={'/anadir-plato'} onClick={showNavMobile}>
            Añadir Plato
          </Link>
        </div>
      </div>
      <ShoppingCart>Carrito</ShoppingCart>
    </MainNavStyled>
  ) : (
    <MainNavStyled>
      <div className="topnav" id="myTopnav">
        <a href="#" className="icon" onClick={showNavMobile}>
          Menú
        </a>
        <div className="navLinks">
          <Link to="/login" onClick={showNavMobile}>
            Mi cuenta
          </Link>
          <Link to="/registro" onClick={showNavMobile}>
            Registro
          </Link>
        </div>
      </div>
      <ShoppingCart>Carrito</ShoppingCart>
    </MainNavStyled>
  );
};
