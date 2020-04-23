import React from "react";
import Ctx from "../context/context";

const Mul6 = (props) => {
    const counterCtx = React.useContext(Ctx.ctx);
    const [mulCtr, setmulCtr] = React.useState(counterCtx.counter);
    const isMountREf = React.useRef(null);

    const mulHandler = () => {
        let val = mulCtr * 6;
        setmulCtr(val);
        isMountREf.current = "DONE"
        //counterCtx.updateCounter(val);
    }

    React.useEffect(() => {
        if (isMountREf.current === "DONE") {
            counterCtx.updateCounter(mulCtr);
        }
    }, [mulCtr]);

    const showHandler = () => {
        console.log("Mul6: showHandler: ", counterCtx.counter);
    }

    return (<React.Fragment>
        <div style={{ height: "200px", width: "200px", border: "1px solid #ccc", display: "inline-block" }}>
            <p>Mul  Counter by 6</p>
            <p>{mulCtr}</p>
            <p>{counterCtx.counter}</p>
            <p><button onClick={showHandler}>Check Ctx Counter</button></p>
            <p>
                <button onClick={mulHandler}>Multiply</button>
            </p>
        </div>
    </React.Fragment>)

}

export default Mul6;