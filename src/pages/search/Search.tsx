import { FunctionComponent, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Search.scss';

const Search: FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(true);
  const history = useHistory();

  const keyHandler = (target: React.KeyboardEvent<HTMLInputElement>) => {
    if (target.key === 'Enter' && !hasError) {
      history.push(`/results/${searchText}`);
    }
  };

  return (
    <div className="search container">
      <div className="wrapper">
        <input
          className="input"
          type="text"
          onChange={e => {
            setHasError(e.target.value.trim().length < 2);
            setSearchText(e.target.value)
          }}
          onKeyPress={keyHandler}
          value={searchText}
        />
        <button className="button" onClick={() => {
          if (!hasError) history.push(`/results/${searchText}`);
        }}>
          <i className="fa fa-search" />
        </button>
      </div>
      {hasError && <div className="error">* Length has to be more than 1 character</div>}
    </div>
  );
};

export default Search;
