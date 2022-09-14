import React, { useState, useRef, useEffect, useContext } from "react";
import { TimerContext } from "../../context/TimerContext";


const Timer = ({ round, setRound, setGuess}) => {
  const [
    time,
    setTime,
  ] = useContext(TimerContext);
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
console.log('timeite', timer)
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
        setTimer("5");
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(seconds > 9 ? seconds :  + seconds);
    }
  };

  const clearTimer = (e) => {
    setTime(timer)
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("5");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 5);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);


  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

    useEffect(() => {
    onClickReset()
  }, [round])

  useEffect(() => {

if(timer == 0){
    console.log('out of time loser!')
    setRound( curr => curr += 1)
}
  },[timer])
  return (
    <div>
      <span>{timer}</span>
    </div>
  );
};

export default Timer;
