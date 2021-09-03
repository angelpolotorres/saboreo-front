import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../common/HeaderElements/index';

export const Home = () => {
  const [listDish, setListDish] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/dishes');
    setListDish(response.data);
    console.log(listDish);
  }, []);

  return (
    <>
      {listDish.map((dish) => (
        <div key={dish._id}> {dish._id} </div>
      ))}
    </>
  );
};
