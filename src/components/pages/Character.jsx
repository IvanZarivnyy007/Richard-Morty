import BackgroundImageCharacter from '../BackgroundImage/BackgroundImageCharacter';
import CharacterList from './../CardCharacter/CharacterList';

const Character = () => {
  return (
    <div>
      <h1 className="character-title">Welcome to Character Page </h1>
      <BackgroundImageCharacter />
      <CharacterList />
    </div>
  );
};

export default Character;
