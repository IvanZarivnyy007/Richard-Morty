import css from '../Cometa/Cometa.module.css';

const Cometa = () => {
  return (
    <div className={css.sky}>
      <div className={`${css.comet} ${css.comet1}`}></div>
      <div className={`${css.comet} ${css.comet2}`}></div>
      <div className={`${css.comet} ${css.comet3}`}></div>
      <div className={`${css.comet} ${css.comet4}`}></div>
    </div>
  );
};

export default Cometa;
