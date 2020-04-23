import React from "react";

const ctx = React.createContext({});

const CtxProvider = (props) => {
    const [counter, setcounter] = React.useState(1);

    const updateCounter = (val) => {
        setcounter(val);
    }

    let val = {
        counter: counter,
        updateCounter: updateCounter
    }

    return (<ctx.Provider value={val}>
        <p>Counter: in Ctx: {counter}</p>
        {props.children}
    </ctx.Provider>)
}

export default ({
    ctx,
    CtxProvider
});