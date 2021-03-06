import React from "react";
import Ctx from "../context/context";

const Mul4 = (props) => {
    const counterCtx = React.useContext(Ctx.ctx);
    const [mulCtr, setmulCtr] = React.useState(counterCtx.counter);

    const mulHandler = () => {
        let val = mulCtr * 4;
        setmulCtr(val);
        counterCtx.updateCounter(val);
    }

    const showHandler = () => {
        console.log("Mul4: showHandler: ", counterCtx.counter);
    }

    return (<React.Fragment>
        <div style={{ height: "200px", width: "200px", border: "1px solid #ccc", display: "inline-block" }}>
            <p>Mul Counter by 4</p>
            <p>{mulCtr}</p>
            <p>{counterCtx.counter}</p>
            <p><button onClick={showHandler}>Check Ctx Counter</button></p>
            <p>
                <button onClick={mulHandler}>Multiply</button>
            </p>
        </div>
    </React.Fragment>)

}

export default Mul4;