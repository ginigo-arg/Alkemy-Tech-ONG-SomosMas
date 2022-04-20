import React from 'react';
import CustomReactPlayer from './VideoPlayer/CustomVideoPlayer';
import './NewsVideo.css';
const NewsVideo = () => {
  return (
    <section className='news__video'>
      <header>Ultimo evento</header>
      <CustomReactPlayer url='https://www.youtube.com/watch?v=4YnSk1gI_Oo' />
    </section>
  );
};

export default NewsVideo;
