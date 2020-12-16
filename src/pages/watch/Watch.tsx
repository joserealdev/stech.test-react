import { FunctionComponent } from 'react';
import './Watch.scss';

interface IProps {
  match: {
    params: {
      id: string
    }
  }
}

const Watch: FunctionComponent<IProps> = (props) => {
  const { id } = props.match.params;

  return (
    <div className="watch container">
      <iframe title={id} className="video" src={`https://www.youtube.com/embed/${id}`} />
    </div>
  );
};

export default Watch;
