import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slick.module.css"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.avif"


const ImageSlider = () => {
    const settings = {
        dots: true,           
        infinite: true,       
        speed: 500,          
        slidesToShow: 1,       
        slidesToScroll: 1,    
        autoplay: true,        
        autoplaySpeed: 2000   
    };

    return (
        <Slider className={style.slider} {...settings}>
            <div><img src={banner1} alt="Slide 1" /></div>
            <div><img src={banner2} alt="Slide 2" /></div>
            <div><img src={banner3} alt="Slide 3" /></div>
            
        </Slider>
    );
};

export default ImageSlider;


