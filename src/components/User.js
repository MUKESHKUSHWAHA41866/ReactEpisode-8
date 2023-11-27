import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        // API Call
    }, []);

    

    return (
    <div className="user-card">
        <h1>Count = {count} </h1>
        <h1>count2 = {count2} </h1>
        <h2>Name:  {name}</h2>
        <h3>Location: Allahabad</h3>
        <h4>Contact:7607968476</h4>
    </div>
    );
};

export default User;