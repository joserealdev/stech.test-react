import React, { FunctionComponent } from 'react';
import './Image.css';

interface IProps {
  src: string
}

const Image: FunctionComponent<IProps> = props => {
  const {
    src
  } = props;

  return (
    <img
      src={src}
      alt="Def alt"
    />
  );
};

export default Image;
