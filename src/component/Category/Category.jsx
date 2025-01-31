
import style from "./Category.module.css";


function Category({ title, image}) {
    return (
        <div className={style.product}>
            <img className={style.img} src={image} alt={title} />
            <div className={style.title}>
                <p className={style.h}>{title}</p>
            </div>
        </div>
    );
}

export default Category;
