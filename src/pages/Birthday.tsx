import React, { ReactElement, useState, useEffect } from 'react';
import Wishes from './Wishes';

function Birthday(): ReactElement {
    const name = 'Đan Thanh';
    const month = 6;
    const day = 23;

    // get current time
    const currentTime = new Date();
    // get current year
    const currentYear = currentTime.getFullYear();

    // Getting the Birthday in Data Object
    // WE subtract 1 from momnth ; Months start from 0 in Date Object
    // Bithday Boolean
    let countdowning = currentTime.getMonth() <= month && currentTime.getDate() < day;
    const [state, setState] = useState({
        seconds: 0,
        hours: 0,
        minutes: 0,
        days: 0,
        done: !countdowning,
    });

    useEffect(() => {
        setInterval(() => {
            const countdown = () => {
                // Getting the Current Date
                const dateAtm = new Date();

                // if the Birthday has passed
                // then set the Birthday countdown for next year
                let birthdayDay = new Date(currentYear, month - 1, day);
                if (dateAtm > birthdayDay) {
                    birthdayDay = new Date(currentYear + 1, month - 1, day);
                } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
                    birthdayDay = new Date(currentYear, month - 1, day);
                }

                // Getitng Current Time
                const currentTime = dateAtm.getTime();
                // Getting Birthdays Time
                const birthdayTime = birthdayDay.getTime();

                // Time remaining for the Birthday
                const timeRemaining = birthdayTime - currentTime;

                let seconds = Math.floor(timeRemaining / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);

                seconds %= 60;
                minutes %= 60;
                hours %= 24;

                // Setting States
                setState((prevState) => ({
                    ...prevState,
                    seconds,
                    minutes,
                    hours,
                    days,
                }));
                if (days < 0 || (days === 0 && minutes === 0 && seconds === 0)) {
                    countdowning = false;
                }
                // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
            };
            if (countdowning) {
                countdown();
            } else {
                setState((prevState) => ({
                    ...prevState,
                    done: true,
                }));
            }
        }, 1000);
    }, [currentYear, day, countdowning, month]);

    let birth = new Date(currentYear, month - 1, day);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    let monthBday = monthNames[birth.getMonth()];

    if (!state.done) {
        return (
            <div className='birthday-page hero-image'>
                <div>
                    <h1 className='birthday-heading'>
                        Countdown to <span className='highlight'>{name}'s</span> Birthday
                    </h1>
                    <div className='birthday-countdown-wrapper'>
                        <div className='birthday-countdown-box'>
                            {state.days}
                            <span className='birthday-legend'>Days</span>
                        </div>
                        <div className='birthday-countdown-box'>
                            {state.hours}
                            <span className='birthday-legend'>Hours</span>
                        </div>
                        <div className='birthday-countdown-box'>
                            {state.minutes}
                            <span className='birthday-legend'>Minutes</span>
                        </div>
                        <div className='birthday-countdown-box'>
                            {state.seconds}
                            <span className='birthday-legend'>Seconds</span>
                        </div>
                    </div>
                </div>
                <div className='birthdate'>
                    Birth-Date: {day} {monthBday} {currentYear}
                </div>
            </div>
        )

    }
    return (
        <Wishes></Wishes>
    )
};

export default Birthday;