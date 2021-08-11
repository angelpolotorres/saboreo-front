import { Label } from '../index';
import { FileUploadStyled } from './FileUploadStyled';

export const FileUpload = (props) => {
  return (
    <>
      <Label htmlFor={props.id} title={props.title} />
      <FileUploadStyled
        type="file"
        id={props.id}
        name={props.name}
        accept={props.accept}
        formMethod={props.formMethod}
        formEncType={props.formEncType}
        onChange={props.onChange}
      />
    </>
  );
};
