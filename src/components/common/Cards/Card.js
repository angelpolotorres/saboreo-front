import { VeganTag } from './VeganTag/VeganTag';
import { GlutenTag } from './GlutenTag/GlutenTag';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = (props) => {
  const urlDish = props.title
    .replaceAll(',', '')
    .replaceAll(' ', '-')
    .toLowerCase()
    .concat('-', props.id);
  console.log(urlDish);

  return (
    <Link
      className="col3 mcol2 dishCard"
      to={{
        pathname: `/plato/${urlDish}`,
        state: {
          title: `${props.title}`,
          portion: `${props.portion}`,
          urlImage: `${props.urlImage}`,
          description: `${props.description}`,
          ingredients: `${props.ingredients}`,
          allergens: `${props.allergens}`,
          vegan: `${props.vegan}`,
          gluten: `${props.gluten}`,
          price: `${props.price}`
        }
      }}
    >
      <div
        className="dishImage"
        style={{ backgroundImage: `url(${props.urlImage})` }}
      ></div>
      <div className="dishInfo">
        <p className="dishTitle">{props.title}</p>
        <div className="dishTags">
          {props.vegan !== 'novegan' && <VeganTag type={props.vegan} />}
          {props.gluten && <GlutenTag />}
        </div>
      </div>
      <div className="dishBuy">
        <div className="dishPriceZone">
          <p className="dishPrice">{props.price} €</p>
        </div>
        <div className="dishBuyButtonZone">
          <a className="dishBuyButton" href="/">
            Añadir
          </a>
        </div>
      </div>
    </Link>
  );
};
