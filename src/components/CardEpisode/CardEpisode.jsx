import css from '../CardEpisode/CardEpisode.module.css';

const CardEpisode = ({ elem }) => {
  return (
    <div className={css['card-episode']}>
      <h2 className={css['episode-name']}>{elem.name}</h2>
      <p className={css['episode-detail']}>
        <strong>Episode:</strong> {elem.episode}
      </p>
      <p className={css['episode-detail']}>
        <strong>Air Date:</strong> {elem.air_date}
      </p>
      <p className={css['episode-detail']}>
        <strong>Characters:</strong> {elem.characters?.length}
      </p>
    </div>
  );
};

export default CardEpisode;
