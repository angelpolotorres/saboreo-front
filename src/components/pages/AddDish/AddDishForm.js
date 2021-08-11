import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  Label,
  TextField,
  RadioButton,
  FileUpload,
  SubmitButton
} from '../../common/FormElements/index';

const AddDishForm = () => {
  const initDishData = {
    name: '',
    portion: '',
    description: '',
    picture: {},
    ingredients: '',
    allergens: [],
    vegan: '',
    glutenFree: false
  };

  const [dishData, setDishData] = useState(initDishData);

  const createDish = () => {
    const formData = new FormData();
    formData.append('name', dishData.name);
    formData.append('file', dishData.picture);
    axios
      .post('http://localhost:3000/dishes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <Form onSubmit={createDish}>
        <TextField
          title="Nombre"
          id="name"
          value={dishData.name}
          onChange={(e) => {
            setDishData({ ...dishData, name: e.target.value });
          }}
        />
        <TextField
          title="Ración"
          id="name"
          value={dishData.portion}
          onChange={(e) => {
            setDishData({ ...dishData, portion: e.target.value });
          }}
        />
        <TextField
          title="Descripción"
          id="description"
          value={dishData.description}
          onChange={(e) => {
            setDishData({ ...dishData, description: e.target.value });
          }}
        />
        <TextField
          title="Ingredientes"
          id="ingredients"
          value={dishData.ingredients}
          onChange={(e) => {
            setDishData({ ...dishData, ingredients: e.target.value });
          }}
        />
        <TextField
          title="Alérgenos"
          id="allergens"
          value={dishData.allergens}
          onChange={(e) => {
            setDishData({ ...dishData, allergens: e.target.value });
          }}
        />
        <FileUpload
          title="Sube una foto del plato"
          id="picture"
          name="picture"
          accept="image/png, image/jpeg"
          formMethod="POST"
          formEncType="multipart/form-data"
          onChange={(e) => {
            setDishData({ ...dishData, picture: e.target.files[0] });
          }}
        />
        <Label htmlfor="vegan" title="¿Este plato es vegano o vegetariano?" />
        <RadioButton
          title="Es vegano"
          name="vegan"
          id="vegan"
          value="vegan"
          onChange={(e) => {
            setDishData({ ...dishData, vegan: e.target.value });
          }}
        />
        <RadioButton
          title="Es vegetariano"
          name="vegan"
          id="vegan"
          value="vegetarian"
          onChange={(e) => {
            setDishData({ ...dishData, vegan: e.target.value });
          }}
        />
        <RadioButton
          title="Ni vegano ni vegetariano"
          name="vegan"
          id="novegan"
          value="novegan"
          onChange={(e) => {
            setDishData({ ...dishData, vegan: e.target.value });
          }}
        />
        <Label htmlfor="vegan" title="¿Tu plato es libre de gluten?" />
        <RadioButton
          title="Es libre de gluten"
          name="glutenfree"
          id="gluten"
          value="true"
          onChange={(e) => {
            setDishData({ ...dishData, glutenFree: e.target.value });
          }}
        />
        <RadioButton
          title="Tiene gluten"
          name="glutenfree"
          id="gluten"
          value="false"
          onChange={(e) => {
            setDishData({ ...dishData, glutenFree: e.target.value });
          }}
        />
        <SubmitButton type="submit">Crear Plato</SubmitButton>
      </Form>
    </>
  );
};
export default AddDishForm;
