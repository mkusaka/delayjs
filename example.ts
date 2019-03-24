import { Promise } from "es6-promise";
// time = millisecond
export const sleep = (
  time: number,
  callback: () => {}
) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback());
    }, time);
  });
};
