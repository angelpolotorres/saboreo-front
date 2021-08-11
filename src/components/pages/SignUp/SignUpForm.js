import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, TextField, SubmitButton } from '../../common/FormElements/index';
import { useAuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

const SignUpForm = () => {
  // Llamamos al contexto
  const AuthContext = useAuthContext();

  // Valores iniciales de usuario
  const initUserData = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };

  // Dependencia que nos permite movernos por las rutas
  const history = useHistory();
  // Datos de usuario
  const [userData, setUserData] = useState(initUserData);
  // Variable para activar o no el boton de submit
  const [disabledButton, setDisableButton] = useState(true);
  // Para ver si el email esta usado
  const [emailAvailable, setEmailAvailable] = useState(true);
  // Mensaje final OK
  const [messageCreated, setMessageCreated] = useState(false);
  // Mensaje final ERROR
  const [messageError, setMessageError] = useState(false);

  // Llamada pasando los datos de usuaro
  const createUser = () => {
    axios
      .post('http://localhost:3000/users', userData)
      .then(function (response) {
        response.status === 400
          ? setMessageError(true)
          : setMessageCreated(true);

        // Pasamos datos a AuthContext
        const { token, profile } = response.data;
        AuthContext.userLogin(token, profile);

        // Limpiamos campos
        setUserData(initUserData);
      })
      .then(() => {
        setTimeout(() => {
          history.push('/');
        }, 2000);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const checkEmailUser = () => {
    axios
      .post('http://localhost:3000/users/checkEmail', {
        email: userData.email
      })
      .then(function (response) {
        response.status === 400
          ? setEmailAvailable(false)
          : setEmailAvailable(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // Este useEffect decide si activar o no el boton de Enviar
  useEffect(() => {
    // Si todos los campos tienen contenido y el email esta disponible
    if (
      Object.values(userData).every((data) => data.length) &&
      emailAvailable
    ) {
      return setDisableButton(false);
    }
    setDisableButton(true);
  }, [userData, emailAvailable]);

  return (
    <>
      <Form onSubmit={createUser}>
        <TextField
          title="Nombre"
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
        />

        <TextField
          title="Apellidos"
          type="text"
          id="surname"
          value={userData.surname}
          onChange={(e) => {
            setUserData({ ...userData, surname: e.target.value });
          }}
        />

        <TextField
          title="Email"
          type="text"
          id="email"
          value={userData.email}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          onBlur={checkEmailUser}
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
        <SubmitButton type="submit" disabled={disabledButton}>
          Crear usuario
        </SubmitButton>
      </Form>
      {messageCreated && <p>Usuario Creado</p>}
      {messageError && <p>Ha ocurrido un error, vuelva a intentarlo</p>}
    </>
  );
};
export default SignUpForm;
