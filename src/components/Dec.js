import React from "react";
import Ctx from "../context/context";



const Dec = (props) => {
    const counterCtx = React.useContext(Ctx.ctx);

    const decHandler = () => {
        counterCtx.updateCounter(counterCtx.counter - 1);
    }

    return (<React.Fragment>
        <div style={{ height: "200px", width: "200px", border: "1px solid #ccc", display: "inline-block" }}>
            <p>Decrement Counter</p>
            <p>{counterCtx.counter}</p>
            <p>
                <button onClick={decHandler}>INC</button>
            </p>
        </div>
    </React.Fragment>)
}

export default Dec;