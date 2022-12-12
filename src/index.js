import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import Component2 from "./components/users/comp2";

export const UserContext = createContext();
export const ColorContext = createContext();

function Component1() {
    const [user, setUser] = useState("Prashant Zombade");
    const [color, setColor] = useState('yellow');


    return (
        <ColorContext.Provider value={[color, setColor]}>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 />
            </UserContext.Provider>

        </ColorContext.Provider>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
