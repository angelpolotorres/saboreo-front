import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useState, useEffect } from 'react';
import {
  Form,
  Label,
  TextInput,
  BlockText,
  RadioInput,
  FileInput,
  SubmitInput
} from '../../common/FormElements/index';
import { Button } from '../../common/Buttons/Button';
import { useAuthContext } from '../../contexts/index';

const CLOUDI_PRESET = process.env.REACT_APP_CLOUDI_PRESET;
const CLOUDI_SERVER = process.env.REACT_APP_CLOUDI_SERVER;

const initDishData = {
  seller: '',
  name: '',
  portion: '',
  description: '',
  image: '',
  ingredients: '',
  allergens: '',
  vegan: '',
  glutenFree: false,
  price: 0
};

export const AddDishForm = (props) => {
  const authContext = useAuthContext();
  const userToken = authContext.userToken;
  const userId = authContext.userProfile.id;
  const [dishData, setDishData] = useState(initDishData);
  const [image, setImage] = useState();
  const [messageError, setMessageError] = useState(false);
  const [messageCreated, setMessageCreated] = useState(false);

  // Dependencia que nos permite movernos por las rutas
  const history = useHistory();

  const createDish = async (event) => {
    // Bloquear el comportamiento x default al pulsar button
    event.preventDefault();

    const imageUrl = await uploadImage();
    const data = { ...dishData, image: imageUrl, seller: userId };

    axios
      .post('http://localhost:3000/dishes', data, {
        headers: {
          token: userToken
        }
      })
      .then(function (response) {
        // console.log(response);
        response.status === 400
          ? setMessageError(true)
          : setMessageCreated(true);
        // Limpiamos campos
        setDishData(initDishData);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const uploadImage = async () => {
    try {
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', CLOUDI_PRESET);
      data.append('cloud_name', CLOUDI_SERVER);

      const imageUrl = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDI_SERVER}/image/upload`,
        data
      );

      if (imageUrl && imageUrl.config.data) {
        return imageUrl.data.secure_url;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form className={props.className} onSubmit={createDish}>
      <TextInput
        placeholder="Nombre"
        onChange={(e) => {
          setDishData({ ...dishData, name: e.target.value });
        }}
      />

      <TextInput
        placeholder="Porción (g)"
        onChange={(e) => {
          setDishData({ ...dishData, portion: e.target.value });
        }}
      />

      <BlockText
        placeholder="Descripción del plato"
        rows="4"
        cols="50"
        onChange={(e) => {
          setDishData({ ...dishData, description: e.target.value });
        }}
      />
      {/* <img src={dishData.url} /> */}
      <FileInput
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />

      <BlockText
        placeholder="Ingredientes"
        rows="4"
        cols="50"
        onChange={(e) => {
          setDishData({ ...dishData, ingredients: e.target.value });
        }}
      />

      <TextInput
        placeholder="Alergenos"
        onChange={(e) => {
          setDishData({ ...dishData, allergens: e.target.value });
        }}
      />

      <Label title="¿Este plato es vegano o vegetariano?" />
      <div>
        <RadioInput
          title="Es vegano"
          name="vegan"
          value="vegan"
          onChange={(e) => {
            setDishData({ ...dishData, vegan: e.target.value });
          }}
        />

        <RadioInput
          title="Es vegetariano"
          name="vegan"
          value="vegetarian"
          onChange={(e) => {
            setDishData({ ...dishData, vegan: e.target.value });
          }}
        />

        <RadioInput
          title="Ni vegano ni vegetariano"
          name="vegan"
          value="novegan"
          onChange={(e) => {
            setDishData({ ...dishData, vegan: e.target.value });
          }}
        />
      </div>

      <Label title="¿Tu plato es libre de gluten?" />
      <div>
        <RadioInput
          title="Es libre de gluten"
          name="glutenfree"
          value="true"
          onChange={(e) => {
            setDishData({ ...dishData, glutenFree: e.target.value });
          }}
        />
        <RadioInput
          title="Tiene gluten"
          name="glutenfree"
          value="false"
          onChange={(e) => {
            setDishData({ ...dishData, glutenFree: e.target.value });
          }}
        />
      </div>

      <TextInput
        placeholder="Precio"
        onChange={(e) => {
          setDishData({ ...dishData, price: e.target.value });
        }}
      />

      <Button className="primary-button">Añadir Plato</Button>
      {messageCreated && <p>Plato Creado</p>}
      {messageError && <p>Alguno de los datos no es correcto</p>}
    </Form>
  );
};
