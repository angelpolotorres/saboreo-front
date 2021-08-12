import { InputFileStyled } from './InputFileStyled';

export const InputFile = (props) => {
  return (
    <>
      <InputFileStyled type="file" onChange={props.onChange} />
    </>
  );
};
