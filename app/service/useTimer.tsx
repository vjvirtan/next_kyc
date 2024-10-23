import React from "react";
// TIMER, CANCEL PROMISE??? JUST TICKETING,
// SOME REASON LET TICKET = OR USESTATE KEEPS ORIGINAL VALUE WITH PROMISE,
// EVEN WHEN REPLASED DURING TIMING.
const Timer = () => {
  const timer = (promiseTicket: number, updateTime: number) => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (updateTime < Date.now()) {
          clearInterval(interval);
          resolve(promiseTicket);
        }
      }, 1000);
    });
  };
  return { timer };
};

export default Timer;
