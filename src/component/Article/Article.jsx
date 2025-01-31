import style from "./Article.module.css"

function Article(props) {
     const { image,title,price } = props.article;
     

    return (
        <div className={style.product}>
            <img className={style.img} src={props.article.image} alt={title} />
            <div className={style.title}>
                <p className={style.h}>{props.article.price} £</p>
                <button>Buy Now</button>
            </div>
        </div>
    );
}

export default Article;

