// import { useState } from "react";
import RegistrationForm from "../RegisrtationForm";
import Coctails from "../Coctails";
import "./main.css";
// import RefInput from "../RefInput/RefInput";
import Modal from "../Modal";


const Main = () => {

    
    return (
        <div className="main">
            
            <div className="main-wrapper">
                {/* <RefInput /> */}
                <RegistrationForm />
                <Coctails />
                <Modal />
            </div>

        </div>
    )

}

export default Main;



