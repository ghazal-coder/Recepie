
import { useEffect, useState } from "react"
import style from "./explore.module.css"

function explore() {
    const[counter,setcounter]=useState(0)


    useEffect( ()=>{
setInterval(() => {
    setcounter ( (counter) => (counter+1))
    
}, 1000);


    },[])

    return (
        <div className={style.explore}>
          <h2>You are still log in for : </h2>
          <h2>{counter} sc</h2>
        </div>
    )
}

export default explore
