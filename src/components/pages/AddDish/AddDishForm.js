import axios from 'axios';
import { useState } from 'react';
import { Form, SubmitButton } from '../../common/FormElements/index';

const CLOUDI_PRESET = process.env.REACT_APP_CLOUDI_PRESET;
const CLOUDI_SERVER = process.env.REACT_APP_CLOUDI_SERVER;

export const AddDishForm = () => {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const uploadImage = (event) => {
    // Bloquear el comportamiento x default al pulsar button
    event.preventDefault();
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
        setUrl(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={uploadImage}>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <SubmitButton>Subir Imagen</SubmitButton>
      </Form>
      <img src={url} />
    </>
  );
};
