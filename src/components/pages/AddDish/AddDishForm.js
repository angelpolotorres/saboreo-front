import axios from 'axios';
import { useState } from 'react';
import {
  Form,
  Label,
  TextInput,
  BlockText,
  RadioInput,
  FileInput,
  SubmitInput
} from '../../common/FormElements/index';

const CLOUDI_PRESET = process.env.REACT_APP_CLOUDI_PRESET;
const CLOUDI_SERVER = process.env.REACT_APP_CLOUDI_SERVER;

const initDishData = {
  name: '',
  portion: '',
  description: '',
  image: '',
  ingredients: '',
  allergens: '',
  vegan: '',
  glutenFree: false
};

export const AddDishForm = () => {
  const [dishData, setDishData] = useState(initDishData);
  const [image, setImage] = useState();
  const [urlImage, setUrlImage] = useState();

  console.log(dishData);

  const createDish = async (event) => {
    // Bloquear el comportamiento x default al pulsar button
    event.preventDefault();
    await uploadImage();
    console.log(dishData);
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', CLOUDI_PRESET);
    data.append('cloud_name', CLOUDI_SERVER);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${CLOUDI_SERVER}/image/upload`,
        data
      )
      .then(function (response) {
        console.log(response);
        setDishData({ ...dishData, image: response.data.url });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={createDish}>
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

        <Label title="¿Tu plato es libre de gluten?" />
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

        <SubmitInput>Crear Plato</SubmitInput>
      </Form>
      <img src={dishData.url} />
    </>
  );
};
