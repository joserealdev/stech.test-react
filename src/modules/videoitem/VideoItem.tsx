import React, { FunctionComponent } from 'react';
import Image from '../../components/image/Image';
import './VideoItem.scss';

interface IProps {
  id: string,
  image: string,
  title: string,
  viewers: number
}

const VideoItem: FunctionComponent<IProps> = props => {
  const { id, title, image, viewers } = props;

  return (
    <div>
      <Image
        src={image}
      />
    </div>
  );
};

export default VideoItem;
