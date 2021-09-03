import { BlockTextStyled } from './BlockTextStyled';

export const BlockText = (props) => {
  return (
    <>
      <BlockTextStyled
        className={props.className}
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
