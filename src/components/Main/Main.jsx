// import { useState } from "react";
import RegistrationForm from "../RegisrtationForm";
import "./main.css";


const Main = () => {

    // const [text, setText] = useState('Click text');
    // const [number, setNumber] = useState(0);

    // const onButtonClickHandler = () => {
    //     setText('Button was clicked')
    // }

    // const onPlusNumberHandler = () => {
    //     setNumber( number + 1)
    // }
    // const onMinusNumberHandler = () => {
    //     setNumber( number - 1)
    // }

    //task2
    // const [firstInput, setFirstInput] = useState();
    // const [secondInput, setSecindInput] = useState();
    // const [result, setResult] = useState(0);

    // const onChangeFirstInputHandler = (value) => {
    //     setFirstInput(value)
    // }
    // const onChangeSecondInputHandler = (value) => {
    //     setSecindInput(value)
    // }

    // const onPlusHandler = () => {
    //     setResult(+firstInput +  +secondInput)
    // }
    // const onMinusHandler = () => {
    //     setResult(firstInput - secondInput)
    // }
    // const onResetResult = () => {
    //     setResult(0)
    // }


    return (
        <div className="main">
            {/* <button onClick={onButtonClickHandler} type="button"> Button </button>
            <div> {text} </div>

            <button onClick={onPlusNumberHandler} type="button">Plus one</button>
            <button onClick={onMinusNumberHandler} type="button">Minus one</button>
            <div> {number} </div> */}

            {/* task2 */}
            {/* <input type="number" onChange={(event) => onChangeFirstInputHandler(event.target.value)} />
            <button onClick={onPlusHandler} type="button">+</button>
            <button onClick={onMinusHandler} type="button">-</button>
            <input type="number" onChange={(event) => onChangeSecondInputHandler(event.target.value)}/>
            <div>{ result }</div>
            <button onClick={onResetResult} type="button">Reset Result</button> */}
            <div className="main-wrapper">

                <RegistrationForm />
            </div>

        </div>
    )

}

export default Main;



