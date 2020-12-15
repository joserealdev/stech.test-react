import React, { FunctionComponent } from 'react';
import './Image.scss';

interface IProps {
  alt?: string,
  className?: string,
  src: string
}

const Image: FunctionComponent<IProps> = props => {
  const {
    alt,
    className,
    src
  } = props;

  return (
    <img
      alt={alt || "Default alt"}
      className={className}
      src={src}
    />
  );
};

export default Image;
