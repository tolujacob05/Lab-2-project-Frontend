import React from "react"
import Autum from "./Pictures/Autum.jpg"
import styles from "./Promo.module.css"




const Promo = () => {
    return (
        <div className={styles.parent}>
            
                <div className={styles.pc1}>
                 
                   <div className={styles.con}>
                   Shopping Experience <br/>
                    made easier 
                   </div>
                
                    <div className={styles.Tb}>
                    <div><button>Find store nearby</button></div>
                    <div><button> Saved Stores</button></div>
                    </div>

                </div>

                <div className={styles.pc2}>

                </div>

            
                
                

        </div>
        
    );
}

export default Promo;