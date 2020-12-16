import { FunctionComponent, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Header.scss';

interface IProps {
  title: string
}

const Header: FunctionComponent<IProps> = props => {
  const { title } = props;
  const history = useHistory();
  const [showBackButton, setShowButton] = useState<boolean>(false);

  history.listen((location, action) => {
    setShowButton(location.pathname !== '/search');
  })
  
  const backButton = showBackButton ?
    (
      <div className="back" onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left" />
      </div>
    )
    : null;

  return (
    <header className="header container">
      {backButton}
      <span>
        {title}
      </span>
    </header>
  );
};

export default Header;
