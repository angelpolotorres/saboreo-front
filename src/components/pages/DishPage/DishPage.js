import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Container, ZoneGrid } from '../../common/Structure/index';
import './DishPage.css';

export const DishPage = (props) => {
  const { id } = useParams();
  const location = useLocation();

  const {
    title,
    portion,
    urlImage,
    description,
    ingredients,
    allergens,
    vegan,
    gluten,
    price
  } = location.state;
  console.log(title);
  const [dishData, setDishData] = useState();

  return (
    <Container>
      <ZoneGrid className="dishZone">
        <div className="dishImageZone col6 mcol4">
          <div
            className="dishImagePage"
            style={{ backgroundImage: `url(${urlImage})` }}
          ></div>
        </div>
        <div className="dishInfoZone col6 mcol4">
          <div className="dishInfoTitle">{title}</div>
          <div className="dishInfoRation">{portion}</div>
          <div className="dishInfoDescription">{description}</div>
          <div className="dishInfoIngredients">Ingredientes: {ingredients}</div>
          <div className="dishInfoButtonBuy">Añadir plato</div>

          <div className="dishInfoAllergens">Alérgenos: {allergens}</div>
        </div>
      </ZoneGrid>
    </Container>
  );
};
