import css from './Stars.module.css';

const Stars = ({}) => {
  return (
    <div>
      <section className={css.animation}>
        <span className={css.star}></span>
        <span className={css.star2}></span>
        <span className={css.star3}></span>
        <span className={css.star4}></span>
      </section>
    </div>
  );
};

export default Stars;
