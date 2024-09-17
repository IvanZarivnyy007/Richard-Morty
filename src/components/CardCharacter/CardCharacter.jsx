import css from './CardCharacter.module.css';
import ModalCharacter from '../ModalCharacter/ModalCharacter';

const CardCharacter = ({ item }) => {
  return (
    <div className={css.card}>
      <img src={item.image} alt={item.name} className={css['card-image']} />
      <div className={css['card-info']}>
        <h2 className={css['card-name']}>{item.name}</h2>
        <p className={css['card-detail']}>
          <strong>Status:</strong> {item.status}
        </p>
        <p className={css['card-detail']}>
          <strong>Species:</strong>{' '}
          {item.species === 'Human' ? (
            <>
              Human <span className={css['human-icon']}></span>
            </>
          ) : (
            <>
              Alien <span className={css['alien-icon']}></span>
            </>
          )}
        </p>
      </div>
      <ModalCharacter item={item} />
    </div>
  );
};

export default CardCharacter;
