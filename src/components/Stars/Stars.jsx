import css from '../Stars/Stars.module.css';

const Stars = () => {
  return (
    <section className="wrapper">
      <div className={css.stars}></div>
      <div className={css.stars2}></div>
      <div className={css.stars3}></div>
    </section>
  );
};

export default Stars;
