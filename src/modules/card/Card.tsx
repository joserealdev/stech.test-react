import { FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";
import Image from '../../components/image/Image';
import './Card.scss';

interface IProps {
  id: string,
  image: string,
  title: string
}

const Card: FunctionComponent<IProps> = props => {
  const { id, title, image } = props;
  const history = useHistory();

  return (
    <div key={id} className="card container" onClick={() => history.push(`/watch/${id}`)}>
      <Image
        alt={title}
        className="image"
        src={image}
      />
      <div className="title">
        {title}
      </div>
    </div>
  );
};

export default Card;
