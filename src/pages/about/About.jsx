
import style from "./About.module.css"
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/footer/Footer'
import Explore from '../../component/explore/explore'
import Wrapper from '../../component/container/Wrapper'
import { motion } from "framer-motion";



const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

function About() {
  return (
    <div className={style.about}>
      <Navbar />
      <Wrapper>
       
        <motion.ul 
          initial="hidden" 
          animate="visible" 
          variants={listVariants}
          style={{ listStyle: "none", padding: 0 }}
        >
          <motion.li variants={itemVariants}>
            <Explore />
          </motion.li>
         
        </motion.ul>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default About;