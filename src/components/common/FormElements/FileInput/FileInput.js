import { FileInputStyled } from './FileInputStyled';

export const FileInput = (props) => {
  return (
    <>
      <FileInputStyled type="file" onChange={props.onChange} />
    </>
  );
};
