import { Button } from '../../Buttons/Button';

export const SubmitInput = (props) => {
  return props.disabled ? (
    <Button className={props.className} type="submit" disabled>
      {props.children}
    </Button>
  ) : (
    <Button className={props.className} type="submit">
      {props.children}
    </Button>
  );
};
