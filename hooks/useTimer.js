//Keep track of the seconds
//Start or stop
//Save start time
//Count total time and return once stopped

import { useEffect, useState } from "react";
import desctructSeconds from "../utilities/destructSeconds";

let sessions = [];

const useTimer = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [intervalState, setIntervalState] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const [hours, minutes, seconds] = desctructSeconds(currentTime);

    const toggleTimer = () => {
        setRunning(!running);
    };

    const getSessions = () => {
        console.log(sessions);
    };

    const getSessionsHours = () => {
        if (sessions.length === 0) return 0;

        const totalTime = sessions
            .map((session) => session.duration)
            .reduce((a, b) => a + b, 0);

        const [hours, minutes, seconds] = desctructSeconds(totalTime);

        //CHANGE TO HOURS LATER

        return minutes.toString().slice(0, 1);
    };

    useEffect(() => {
        if (running && currentTime === 0) {
            setIntervalState(
                setInterval(() => setCurrentTime((time) => time + 1), 1000)
            );
            setStartTime(new Date().getTime());
        } else {
            clearInterval(intervalState);
            setCurrentTime(0);
            setEndTime(new Date().getTime());
        }
    }, [running]);

    useEffect(() => {
        if (startTime === 0) return;
        setStartTime(0);
        setEndTime(0);
        sessions.push({
            startTime: startTime,
            endTime: endTime,
            duration: endTime / 1000 - startTime / 1000,
        });
    }, [endTime]);

    return {
        time: currentTime,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        status: running,
        sessionsHours: getSessionsHours,
        toggle: toggleTimer,
        getSessions: getSessions,
    };
};

export default useTimer;
