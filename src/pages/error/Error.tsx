import React, { FunctionComponent } from 'react';
import './Error.css';

interface IProps {
  className?: string,
  rating: number
}

const Error: FunctionComponent<IProps> = props => {
  const {
    className,
    rating = 0
  } = props;

  return (
    <div className={className}>
      Hola
    </div>
  );
};

export default Error;
