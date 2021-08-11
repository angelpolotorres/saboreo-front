import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, TextField, SubmitButton } from '../../common/FormElements/index';
import { useAuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

const LogInForm = () => {
  // Llamamos al contexto
  const AuthContext = useAuthContext();

  // Valores iniciales de usuario
  const initUserData = {
    email: '',
    password: ''
  };

  // Dependencia que nos permite movernos por las rutas
  const history = useHistory();
  // Datos de usuario
  const [userData, setUserData] = useState(initUserData);
  // Mensaje final OK
  const [messageLoged, setMessageLoged] = useState(false);
  // Mensaje final ERROR
  const [messageError, setMessageError] = useState(false);

  // Llamada pasando los datos de usuaro
  const logInUser = () => {
    axios
      .post('http://localhost:3000/users/login', userData)
      .then(function (response) {
        console.log(response);
        setMessageLoged(true);
        // Pasamos datos a AuthContext
        const { token, profile } = response.data;
        AuthContext.userLogin(token, profile);
        // Limpiamos campos
        setUserData(initUserData);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      })
      .catch(function (err) {
        console.log(err);
        setMessageError(true);
        // Limpiamos campos
        setUserData(initUserData);
        // Recargamos página
        setTimeout(() => {
          history.push('/login');
        }, 2000);
      });
  };

  return (
    <>
      <Form onSubmit={logInUser}>
        <TextField
          title="Email"
          type="text"
          id="email"
          value={userData.email}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />

        <TextField
          title="Contraseña"
          type="text"
          id="password"
          value={userData.password}
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
        />
        <SubmitButton type="submit">Acceder</SubmitButton>
      </Form>
      {messageLoged && <p>Bienvenido</p>}
      {messageError && <p>Alguno de los datos no es correcto</p>}
    </>
  );
};
export default LogInForm;
