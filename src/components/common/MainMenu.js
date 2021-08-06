import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const MainMenu = () => {
  // Cargamos contexto
  const authContext = useAuthContext();

  // Menu a mostrar si estas logeado.
  return authContext.userProfile ? (
    <div className="menu-container">
      <ul>
        <li>
          <Link to={`/user/${authContext.userProfile.nickname}`}>Perfil</Link>
        </li>
        <li>
          <Link onClick={authContext.userLogout}>Logout</Link>
        </li>
        <li>
          <Link to={'/anadir-plato'}>Añadir Plato</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className="menu-container">
      <ul>
        <li>
          <Link to="/login">Mi cuenta</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
      </ul>
    </div>
  );
};
export default MainMenu;
