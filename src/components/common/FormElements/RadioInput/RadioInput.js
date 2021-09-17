import { Label } from '../index';
import { RadioInputStyled } from './RadioInputStyled';

export const RadioInput = (props) => {
  return (
    <>
      <RadioInputStyled
        type="radio"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <Label htmlFor={props.id} title={props.title} />
    </>
  );
};
