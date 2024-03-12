import {useState} from 'react';
function Counter () {
    // let counter=0;
    const [counter, setCounter] = useState(0);
    function increaseCounter(e) {
        e.stopPropagation();
        //counter++;
        setCounter(counter=>counter+1); //instead of counter+1
        console.log(counter); // in react this show that we are not getting the updated
                              // value of counter as it just give the snapshot of the value
                              // of counter at the time of execution of the function
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={increaseCounter}>Increament</button>
        </div>
    );
}
 export default Counter;