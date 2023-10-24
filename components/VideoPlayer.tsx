'use client';

import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  return (
    <ReactPlayer
      url='https://youtu.be/6Rhmr3Vl1Ko'
      width='100%'
      height='100%'
      controls={true}
    />
  );
}
