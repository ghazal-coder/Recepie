import style from "./Article.module.css";

function Article(props) {
  return (
    <article className={style.product}>
      <img
        className={style.img}
        src={props.strMealThumb}
        alt={props.strMeal}
      />
      <div className={style.title}>
        <h2 className={style.h}>{props.strMeal} £</h2>
      </div>
    </article>
  );
}

export default Article;
