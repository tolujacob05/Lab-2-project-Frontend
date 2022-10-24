import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"
import Stores from "./Stores"
import Cart from "./Cart"

const Main = () => {
    return (
        <>
            <div>
                <Navbar />
                <Promo />
                <div className="But">
                    <button>Find store nearby</button>
                    <button>Saved Stores</button>
                </div>
                <Stores />
                <Cart />
                <Footer />
                
            </div>
        </>

    )
}

export default Main

