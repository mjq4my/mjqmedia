import React from 'react';
import './embeds.css';

const InstagramEmbed = ({ postUrl, noWrapper = false }) => {
  if (!postUrl) return null;

  // Normalize to an embed URL; Instagram supports appending /embed
  const normalized = postUrl.endsWith('/embed')
    ? postUrl
    : postUrl.replace(/\/?$/, '/') + 'embed';

  const inner = (
    <div className="embed-inner">
      <iframe
        src={normalized}
        title="Instagram post"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allowFullScreen
      />
    </div>
  );

  if (noWrapper) return inner;

  return (
    <div className="embed embed-instagram" role="region" aria-label="Instagram post">
      {inner}
    </div>
  );
};

export default InstagramEmbed;
