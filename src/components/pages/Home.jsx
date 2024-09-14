import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Stars from '../Stars/Stars';

const Home = () => {
  return (
    <div>
      <Stars />
      <h1 className="home-title">The Rick and Morty Experience</h1>
      <BackgroundImage />
    </div>
  );
};

export default Home;
