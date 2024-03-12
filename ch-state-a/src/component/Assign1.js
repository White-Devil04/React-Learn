import { useEffect, useState } from 'react';
function Assign1() {
    const [date, setDate] = useState(new Date());

    // const id=setInterval(() => {
    //     setDate(new Date());
    // }, 1000);
    // console.log(id);

    // as this code there will we many copies of the date object and
    // create so many new timer every sec so that can give too much load
    // to searcer and is not a good habbit to do in react.

    useEffect(() => {
        const id=setInterval(() => {
            const now = new Date();
            setDate(now);
            if (now.getSeconds() === 0) {
                console.log('A new minute has started');
              }
        }, 1000);
        console.log(id);
    }, []);

    return (
        <div>
            <h1>Current Time</h1>
            <h2>{date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</h2>
        </div>
    );
}
export default Assign1;