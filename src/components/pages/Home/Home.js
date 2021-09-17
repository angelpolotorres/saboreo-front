import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../../common/Cards/Card';
import { Container, ZoneGrid } from '../../common/Structure/index';

export const Home = () => {
  const [listDish, setListDish] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/dishes');
    console.log(response.data);
    setListDish(response.data);
  }, []);

  return (
    <>
      <Container>
        <ZoneGrid>
          {listDish.map((dish) => (
            <Card
              key={dish._id}
              title={dish.name}
              vegan={dish.vegan}
              urlImage={dish.image}
              gluten={dish.glutenFree}
              price={dish.price}
              id={dish._id}
              portion={dish.portion}
              description={dish.description}
              ingredients={dish.ingredients}
              allergens={dish.allergens}
            />
          ))}
        </ZoneGrid>
      </Container>
    </>
  );
};
