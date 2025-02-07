import style from "./Motion.module.css";
import { Link} from "react-router-dom";
import { motion} from "framer-motion";



const buttonVariants = {
  
    hover: {
        scale:1.1,
      
        boxShadow: "0px 0px 8px rgb(27, 26, 26)",
        
      transition: {
            // mirror | reverse | loop
            repeatType: "reverse ",
            repeat:2
        }
    }
}
function Motions() {
    return (
        <>
            <div className={style.explore}>
      
    
                <motion.div
                    className={style.Contactus}
                    initial={{ y: '-20vw'}}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1, duration: 1, type: "spring", stiffness: 120 }}
                >
                    <motion.span
                        whileHover={{
                            textShadow:"0px 0px 15px rgba(0, 191, 255, 0.8)",
                            scaleY: 1.2,
                        }}
                    >
                        Contact us
                    </motion.span>

                    <hr />
                </motion.div>
   <motion.h2
    animate={{ fontSize: "30px", color: "#11111" }}
    transition={{ delay: 1.5 }}
    style={{ textShadow: "2px 2px 5px rgba(10, 10, 10, 0.5)" }}
 
>
    E-Commerce <motion.span 
        style={{ display: "inline-block" }} 
        animate={{ y: [0, 18, 0], rotate: [0, 28, 0] }} // انیمیشن برای "Shop"
        transition={{ delay: 1.8, duration: 0.5, repeat: 2, repeatType: "reverse" }}
    >
        Shop
    </motion.span>
</motion.h2>




        



 
                <motion.div
                    className={style.btns}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                >
                    <div>
                        <ul className={style.navbar}>
                            <Link to="/products">
                                <motion.button
                                    className={style.btn}
                                    whileHover={{
                                        scale: 1.2,
                                        backgroundColor: " rgba(113, 125, 113, 0.8)",
                                        color: "#fff",
                                         boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
                                    }}
                                >
                                    Men
                                </motion.button>
                            </Link>
                            <Link to="/products">
                                <motion.button
                                    className={style.btn}
                                    whileHover={{
                                        scale: 1.2,
                                        backgroundColor: " rgba(113, 125, 113, 0.8)",
                                        color: "#fff",
                                        boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
                                    }}
                                >
                                    Women
                                </motion.button>
                            </Link>
                            <Link to="/products">
                                <motion.button
                                    className={style.btn}
                                    whileHover={{
                                        scale: 1.2,
                                        backgroundColor: " rgba(113, 125, 113, 0.8)",
                                        color: "#fff",
                                         boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
                                    }}
                                >   
                                    Children
                                </motion.button>
                            </Link>
                        </ul>
                    </div>

                      <Link to="/products">
                                <motion.button
                                    className={style.btn}
                                      initial= {{x:920}}
                                    animate={{x:0}}
                                    transition={{ delay:1 , duration : 2, type:'spring'}}
                                    whileHover={{
                                        scale: 1.2,
                                        backgroundColor: " rgba(113, 125, 113, 0.8)",
                                        color: "#fff",
                                       boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
                                    }}
                                >
                                Shop Now
                                </motion.button>
                            </Link>
                             <motion.span
                                    className={style.text}
                                    whileHover={{
                                        scale: 1.2,
                                   originX:0
                                    }}
                                >
                             Return your purchase
                                </motion.span>
                                <motion.span
                                    className={style.text}
                                    whileHover={{
                                        scale: 1.2,
                                    originX:0
                                    }}
                                >
                               Help
                                </motion.span>
                                  <motion.span
                                    className={style.text}
                                    
                                    whileHover={{
                                        scale: 1.2,
                                    originX:0
                                    }}
                                >
                               My Shopping
                                </motion.span>
                </motion.div>
                  <motion.div
                   
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:1, duration:2 }}
        >
                    <motion.button   className={style.btnJuorney}
                   
                    variants={buttonVariants}
                    whileHover = "hover"
                >
                   Start Your Juorney
                </motion.button></motion.div>
            </div>
        </>
    );
}

export default Motions;
 
   




  

       