import axios from 'axios';
import { useState } from 'react';
import {
  FileUpload,
  Form,
  SubmitButton,
  TextField
} from '../../common/FormElements/index';

export const UploadFile = () => {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'saboreo');

    fetch('https://api.cloudinary.com/v1_1/angelpolo/image/upload', {
      method: 'POST',
      body: data
    })
      .then((res) => console.log(res.json()))
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));

    // axios
    //   .post('https://api.cloudinary.com/v1_1/angelpolo/image/upload', data)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <h1>Subir Imagen</h1>
      <form>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Subir Imagen</button>
      </form>
      <img src={url} />
    </>
  );
};
