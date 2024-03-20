import React from 'react';

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className='h-full w-full rounded-lg'
        width='100%'
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;