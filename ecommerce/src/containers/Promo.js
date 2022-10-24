import React from "react"
import Autum from "./Pictures/Autum.jpg"
import styles from "./Promo.module.css"




const Promo = () => {
    return (
        <div className={styles.parent}>
            
                <div className={styles.pc1}>
                 
                    Shopping Experience <br/>
                    made easier
                 <button> Find store nearby</button>
                 <button> Saved Stores</button>
                </div>

                {/* <div className={styles.pc2}>
               <div className={styles.suh}>
               <img src={Autum} alt="this is an autum promo" height={"400"} width={"400"}  /> 
               </div>

               
                
                </div> */}

                <div className={styles.pc2}>
               
                </div>
              
                
                

        </div>
        
    );
}

export default Promo;