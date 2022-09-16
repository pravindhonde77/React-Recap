import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (timer > 1) {
                clearInterval(id)

            } else {
                setTimer((prev) => prev + 1)

            }


        }, 1000);
        return () => {
            clearInterval(id)
        };
    }, []);

    return (
        <div>Count up :{timer}</div>
    )
}

export default Timer