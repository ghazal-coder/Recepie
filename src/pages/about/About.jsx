
import style from "./About.module.css"
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/footer/Footer'
import Wrapper from '../../component/container/Wrapper'
import Motions from "../../component/motion/Motions"



function About() {
  return (
    <div className={style.about}>
      <Navbar />
      <Wrapper> 
   
          
      <Motions />


          
      
    
      </Wrapper>
      <Footer />
    </div>
  );
}

export default About;



