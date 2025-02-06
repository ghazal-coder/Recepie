import style from "./Motion.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            </div>
        </>
    );
}

export default Motions;
 
   




  
//         <div className={style.explore} >
//         <div className={style.Contactus}>    <p>Contact us</p><hr />    </div>
        
//           <div> <motion.ul className={style.navbar}  initial={{opacity : 0}}
//            animate={{opacity :3}}
//             transition={{ delay:1 , duration : 2}}>
               
//                 <li><Link to="/mensclothes" tabIndex="0">Men</Link> </li>
//                 <li><Link to="/jewelry" tabIndex="0">Women</Link></li>
//                 <li><Link to="/" tabIndex="0">Baby Colection</Link></li>
              
//             </motion.ul>
//    </div></div>
//          <Link to="/products"><button className={style.btn}>Shop Now</button></Link> 
   
       