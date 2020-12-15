import { FunctionComponent, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Search.scss';

const Search: FunctionComponent = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(true);

  return (
    <div className="search container">
      <div className="wrapper">
        <input
          className="input"
          type="text"
          onChange={e => {
            setShowError(e.target.value.trim().length < 2);
            setSearchText(e.target.value)
          }}
          value={searchText}
        />
        <button className="button" onClick={() => history.push(`/results/${searchText}`)}>
          <i className="fa fa-search" />
        </button>
      </div>
      {showError && <div className="error">* Length has to be more than 1</div>}
    </div>
  );
};

export default Search;
