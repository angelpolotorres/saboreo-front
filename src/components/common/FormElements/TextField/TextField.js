import { Label } from '../index';

export const TextField = (props) => {
  return (
    <>
      <Label htmlFor={props.id} title={props.title} />
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};
