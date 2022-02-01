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
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [sessions, setSessions] = useState([]);

    const [hours, minutes, seconds] = desctructSeconds(currentTime);

    const toggleTimer = () => {
        setRunning(!running);
    };

    const resetTimer = () => {
        setRunning(false);
        setCurrentTime(0);
        setSessions([]);
        setStartTime(0);
        setEndTime(0);
    };

    const totalHours = () => {
        if (sessions.length === 0) return 0;

        const totalTime = sessions
            .map((session) => session.duration)
            .reduce((a, b) => a + b, 0);

        const [minutes] = desctructSeconds(totalTime);

        return [minutes];
    };

    useEffect(() => {
        if (running) {
            setStartTime(new Date().getTime());
            setIntervalState(
                setInterval(
                    () => setCurrentTime((currentTime) => currentTime + 1),
                    100
                )
            );
        } else if (!running && currentTime > 0) {
            clearInterval(intervalState);
            setEndTime(new Date().getTime());
        }
    }, [running]);

    useEffect(() => {
        if (endTime - startTime === 0) return;
        setSessions(
            sessions.concat({
                id: sessions.length,
                duration: endTime - startTime,
                started: startTime,
                ended: endTime,
            })
        );
        setStartTime(0);
        setEndTime(0);
    }, [endTime]);

    //DEBUGGING ONLY
    useEffect(() => {
        console.log("Current sessions: ", sessions);
    }, [sessions]);

    return {
        time: currentTime,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        status: running,
        totalTime: totalHours,
        toggle: toggleTimer,
        reset: resetTimer,
    };
};

export default useTimer;
