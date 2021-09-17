import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, TextInput } from '../../common/FormElements/index';
import { Button } from '../../common/Buttons/Button';
import { useAuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

export const SignUpForm = (props) => {
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
  // PAra ver si el email esta usado
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
    <Form className={props.className} onSubmit={createUser}>
      <h1 className="title-signup">Bienvenido a Saboreo</h1>
      <TextInput
        name="Nombre"
        value={userData.name}
        placeholder="Nombre"
        onChange={(e) => {
          setUserData({ ...userData, name: e.target.value });
        }}
      />
      <TextInput
        name="Apellidos"
        value={userData.surname}
        placeholder="Apellidos"
        onChange={(e) => {
          setUserData({ ...userData, surname: e.target.value });
        }}
      />
      <TextInput
        name="Email"
        value={userData.email}
        placeholder="Email"
        onChange={(e) => {
          setUserData({ ...userData, email: e.target.value });
        }}
        onBlur={checkEmailUser}
      />
      <TextInput
        name="Password"
        value={userData.password}
        placeholder="Password"
        onChange={(e) => {
          setUserData({ ...userData, password: e.target.value });
        }}
      />
      <Button className="primary-button">Crear Cuenta</Button>
      {messageCreated && <p>Usuario Creado</p>}
      {messageError && <p>Ha ocurrido un error, vuelva a intentarlo</p>}
    </Form>
  );
};
