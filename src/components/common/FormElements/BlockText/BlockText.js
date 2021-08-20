import { BlockTextStyled } from './BlockTextStyled';

export const BlockText = (props) => {
  return (
    <>
      <BlockTextStyled
        rows={props.rows}
        cols={props.cols}
        placeholder={props.placeholder}
        onChange={props.onChange}
      >
        {props.children}
      </BlockTextStyled>
    </>
  );
};
