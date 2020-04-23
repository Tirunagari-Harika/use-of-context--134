import React from "react";
import Ctx from "../context/context";



const Inc = (props) => {
    const counterCtx = React.useContext(Ctx.ctx);

    const incHandler = () => {
        counterCtx.updateCounter(counterCtx.counter + 1);
    }

    React.useEffect(() => {
        console.log("Inc: ", counterCtx.counter);
    }, []);

    return (<React.Fragment>
        <div style={{ height: "200px", width: "200px", border: "1px solid #ccc", display: "inline-block" }}>
            <p>Increment Counter</p>
            <p>{counterCtx.counter}</p>
            <p>
                <button onClick={incHandler}>INC</button>
            </p>
        </div>
    </React.Fragment>)
}

export default Inc;