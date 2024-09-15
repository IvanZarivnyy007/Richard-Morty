import BackgroundImage from '../components/BackgroundImage/BackgroundImage';
import Stars from '../components/Stars/Stars';

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
