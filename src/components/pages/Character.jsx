import CharacterList from './../CardCharacter/CharacterList';
import BackgroundImageLocation from './../BackgroundImage/BackgroundImageLocation';

const Character = () => {
  return (
    <div>
      <h1 className="character-title">Welcome to Character Page </h1>
      <BackgroundImageLocation />
      <CharacterList />
    </div>
  );
};

export default Character;
