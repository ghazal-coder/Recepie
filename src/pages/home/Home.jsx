import style from "./Home.module.css";
import Navbar from '../../component/navbar/navbar';
import Header from '../../component/header/Header';
import Wrapper from "../../component/container/Wrapper";
import ProductBox from '../../component/ProductBox/ProductBox';
import Footer from "../../component/footer/Footer";
import Explore from "../../component/explore/explore";
import ImageSlider from "../../component/Slick/Slick"

function Home() {
 
    return (
        <div className={style.home}>
            <Navbar />
             <Wrapper> <ImageSlider /></Wrapper>
            <Wrapper><Header /></Wrapper>
            <Wrapper><ProductBox /></Wrapper>
        
            <Wrapper><Explore /></Wrapper>
                   
                    <Footer />
             
          
        </div>
 
    )}
export default Home;





