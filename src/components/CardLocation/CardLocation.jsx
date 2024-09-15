import css from './CardLocation.module.css';

const CardLocation = ({ data }) => {
  return (
    <div className={css['card-location']}>
      <h2 className={css['location-name']}>{data.name}</h2>
      <p className={css['location-detail']}>
        <strong>Type:</strong> {data.type}
      </p>
      <p className={css['location-detail']}>
        <strong>Dimension:</strong> {data.dimension}
      </p>
      <p className={css['location-detail']}>
        <strong>Residents:</strong> {data.residents}
      </p>
    </div>
  );
};

export default CardLocation;
