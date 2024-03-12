import { useState, useEffect } from "react";
function Assign2() {
    const [reset,setReset] = useState(new Date());
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);
        console.log(id);
    }, []);
    return (
        <div>
            <button onClick={()=>setReset(new Date())}>RESET</button>
            <h1>Assign2</h1>
            <h2>{Math.floor((date-reset)/(1000*60*60))%24 + ":" + Math.floor((date-reset)/(1000*60))%60 + ":" + Math.floor((date-reset)/(1000))%60}</h2>
        </div>
    );
}
export default Assign2;