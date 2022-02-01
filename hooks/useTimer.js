//Keep track of the seconds
//Start or stop
//Save start time
//Count total time and return once stopped

import { useEffect, useState } from "react";
import desctructSeconds from "../utilities/destructSeconds";

const useTimer = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [intervalState, setIntervalState] = useState(null);
    //const [hours, setHours] = useState(0);
    //const [minutes, setMinutes] = useState(0);
    //const [seconds, setSeconds] = useState(0);

    const toggleTimer = () => {
        setRunning(!running);
    };

    const resetTimer = () => {
        setRunning(false);
        setCurrentTime(0);
    };

    const [hours, minutes, seconds] = desctructSeconds(currentTime);

    useEffect(() => {}, [currentTime]);

    useEffect(() => {
        if (running) {
            setIntervalState(
                setInterval(
                    () => setCurrentTime((currentTime) => currentTime + 1),
                    100
                )
            );
        } else if (!running) {
            clearInterval(intervalState);
        }
    }, [running]);

    return {
        time: currentTime,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        status: running,
        toggle: toggleTimer,
        reset: resetTimer,
    };
};

export default useTimer;
