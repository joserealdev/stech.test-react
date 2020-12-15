import React, { FunctionComponent } from 'react';
import './Header.scss';

interface IProps {
  title?: string
}

const Header: FunctionComponent<IProps> = props => {
  const { title } = props;

  return (
    <header className="header container">
      <span>
        {title}
      </span>
    </header>
  );
};

export default Header;
