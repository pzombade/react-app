import { useContext, useEffect } from "react";
import { ColorContext, UserContext } from "../..";

export default function Component5() {
    const user = useContext(UserContext);
    const [color, setColor] = useContext(ColorContext);


    useEffect(() => {
        setInterval(() => {
            setColor("green");
        }, 2000);
    });

    // 
    return (
        <>
            <h1>Component 5</h1>
            <h2 style={{ color: color }}>{`Hello ${user} again!`}</h2>
        </>
    );
}