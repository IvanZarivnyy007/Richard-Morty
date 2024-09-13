import BackgroundImageEpisode from '../BackgroundImage/BackgroundImageEpisode';
import EpisodeList from '../CardEpisode/EpisodeList';

const Episode = ({}) => {
  return (
    <div>
      <h1 className="episode-title">Welcome to Episode Page </h1>
      <BackgroundImageEpisode />
      <EpisodeList />
    </div>
  );
};

export default Episode;
