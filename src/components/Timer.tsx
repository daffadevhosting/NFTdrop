import { FC, useEffect, useState } from "react";

interface ITimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerProps {
  date: Date;
}

const Timer: FC<TimerProps> = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = Number(new Date(date)) - Number(new Date());
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as ITimeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<ITimeLeft>(calculateTimeLeft());
  const { days, hours, minutes, seconds } = timeLeft;

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const items = [
    { label: "Day", value: days },
    { label: "Hour", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <div className="timer">
      {items.map(({ label, value }) => (
        <div key={label} className="timerItem">
          <p className="timerValue">
            {value < 10 ? `0${value}` : value}{" "}
          </p>
          <p className="timerLabel">
            {value === 1 ? label : `${label}s`}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Timer;
