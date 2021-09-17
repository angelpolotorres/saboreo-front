import { VeganTagStyled } from './VeganTagStyled';
import { VegetarianTagStyled } from './VegetarianTagStyled';

export const VeganTag = (props) => {
  if (props.type === 'vegan') {
    return <VeganTagStyled>Vegano</VeganTagStyled>;
  } else {
    return <VegetarianTagStyled>Vegetariano</VegetarianTagStyled>;
  }
};
