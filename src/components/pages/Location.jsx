import BackgroundImageLocation from './../BackgroundImage/BackgroundImageLocation';
import LocationList from '../CardLocation/LocatonList';

const Location = ({}) => {
  return (
    <div>
      <h1 className="location-title"> Location </h1>
      <BackgroundImageLocation />
      <LocationList />
    </div>
  );
};

export default Location;
