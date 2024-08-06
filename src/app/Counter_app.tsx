"use client";

// import { Declaration } from "postcss";
import { useState } from "react"

type CounterTypes = {
    message: string;
    count: number;
}

export default function Counter({
    message,
    count
}
    : CounterTypes) {

    //  constant declared

    const [userName, setUserName] = useState("Moosa");
    const [initCount, setInitCount] = useState<number>(count);
    const numval = parseInt(userName);
    const [multiplier, setmultiplier] = useState(2);
    // const [multiplier, setmultiplier] = useState(1);

    //  constant declared





    // functions declaration

    const subtracting = () => {
        if (initCount === 0) { return initCount }
        setInitCount(initCount - 1)
    }
    const adding = () => {
        setInitCount(initCount - (-1))
    }


    const multiplying = () => {
        setInitCount(initCount * multiplier);
        setmultiplier(multiplier + 1);
    }

    // functions declaration


    // HTML 
    return (
        <>
            <h1>{message}</h1>
            <input
                type="text"
                value={userName}
                // onChange={userNameHandler}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <h3>Welcome {userName}</h3>
            <p>{initCount}</p>
            <button onClick={adding}>Plus</button>
            <br />
            <button onClick={subtracting}>Minus</button>
            <br />
            <button onClick={multiplying}>Product</button>
        </>
    )
}