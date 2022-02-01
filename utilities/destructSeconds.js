const desctructSeconds = (initial) => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (initial < 60) {
        seconds = initial;
    }

    if (initial >= 60) {
        minutes = Math.floor(initial / 60);
        seconds = initial - minutes * 60;
    }

    if (initial >= 3600) {
        hours = Math.floor(initial / 3600);
        minutes = Math.floor(initial / 60) - hours * 60;
    }

    return [hours, minutes, seconds];
};

export default desctructSeconds;
