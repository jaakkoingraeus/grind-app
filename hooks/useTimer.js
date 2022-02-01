//Keep track of the seconds
//Start or stop
//Save start time
//Count total time and return once stopped

import { useEffect, useState } from "react";

const useTimer = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [intervalState, setIntervalState] = useState(null);

    const toggleTimer = () => {
        setRunning(!running);
    };

    const resetTimer = () => {
        setRunning(false);
        setCurrentTime(0);
    };

    useEffect(() => {
        if (running) {
            setIntervalState(
                setInterval(
                    () => setCurrentTime((currentTime) => currentTime + 1),
                    1000
                )
            );
        } else if (!running) {
            clearInterval(intervalState);
        }
    }, [running]);

    return {
        time: currentTime,
        status: running,
        toggle: toggleTimer,
        reset: resetTimer,
    };
};

export default useTimer;
