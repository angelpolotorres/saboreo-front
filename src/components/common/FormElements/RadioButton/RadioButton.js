import { Label } from '../index';
import { RadioButtonStyled } from './RadioButtonStyled';

export const RadioButton = (props) => {
  return (
    <>
      <Label htmlFor={props.id} title={props.title} />
      <RadioButtonStyled
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};
