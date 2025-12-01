import React from 'react';
import './embeds.css';

const YouTubeEmbed = ({ videoId, title = 'YouTube video', noWrapper = false }) => {
  if (!videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}`;

  const inner = (
    <div className="embed-inner">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );

  if (noWrapper) return inner;

  return (
    <div className="embed embed-youtube" role="region" aria-label={title}>
      {inner}
    </div>
  );
};

export default YouTubeEmbed;
