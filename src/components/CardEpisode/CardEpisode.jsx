import { useState } from 'react';

const CardEpisode = ({ elem }) => {
  return (
    <div className="card-episode">
      <h2 className="episode-name">{elem.name}</h2>
      <p className="episode-detail">
        <strong>Episode:</strong> {elem.episode}
      </p>
      <p className="episode-detail">
        <strong>Air Date:</strong> {elem.air_date}
      </p>
      <p className="episode-detail">
        {/* <strong>Characters:</strong> {elem.characters.length} */}
      </p>
    </div>
  );
};

export default CardEpisode;
