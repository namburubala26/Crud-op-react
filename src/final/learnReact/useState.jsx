import React, {useState} from "react";
const Index = () =>{
    const [count,setCount]=useState(0);
    const incrementCount = () => {
        setCount((prevCount)=> {
            return prevCount+1;
        });
        setCount((prevCount) => prevCount+1);
        
    };
    const decrementCount =() => {
        setCount((prevCount)=> {
            return prevCount-1;
        });
        setCount((prevCount) => prevCount-1);
    }
    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default Index;