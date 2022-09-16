import React from 'react'
import { useState } from 'react';

const StopWatch = () => {
    const [watch, setWatch] = useState(0);
    const [timerId, setTimerId] = useState();
    const start = () => {
        if (!timerId) {
            let id = setInterval(() => {
                setWatch((prev) => prev + 1)
            }, 1000);
            setTimerId(id)
        }
    }


    const pause = () => {
        clearInterval(timerId)
        setTimerId(null)
    }


    const reset = () => {
        clearInterval(timerId)
        setWatch(0)
        setTimerId(null)
    }


    return (
        <div>
            <h2>STOPWATCH</h2>
            <h1>{watch}</h1>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch