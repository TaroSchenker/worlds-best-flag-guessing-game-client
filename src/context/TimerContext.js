import React, { createContext, useState } from "react";

export const TimerContext = createContext();

export default function TimerProvider(props) {
  const [time, setTime] = useState(null);
  return (
    <TimerContext.Provider
      value={[
        time,
        setTime,
      ]}
    >
      {props.children}
    </TimerContext.Provider>
  );
}
