import css from '../Stars/Stars.module.css';

const Stars = () => {
  return (
    <div>
      <section className="wrapper">
        <div className={css.stars1}></div>
        <div className={css.stars2}></div>
        <div className={css.stars3}></div>
      </section>
    </div>
  );
};

export default Stars;
