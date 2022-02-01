import React, { createContext } from "react";

const TimerContext = createContext({
    running: false,
    hours: 0,
    minutes: 31,
    seconds: 40,
});

export { TimerContext };
