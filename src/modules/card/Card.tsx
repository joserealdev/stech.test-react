import React, { FunctionComponent } from 'react';
import Image from '../../components/image/Image';
import './Card.scss';

interface IProps {
  id: string,
  image: string,
  title: string
}

const Card: FunctionComponent<IProps> = props => {
  const { id, title, image } = props;

  return (
    <div className="card container">
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
