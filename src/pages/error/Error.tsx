import React, { FunctionComponent } from 'react';
import './Error.scss';

interface IProps {
  error: string
}

const Error: FunctionComponent<IProps> = props => {
  const {
    error
  } = props;

  return (
    <div className="">
      {error}
    </div>
  );
};

export default Error;
