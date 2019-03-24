import { Promise } from "es6-promise";
// time = millisecond
export const sleep = (
  time: number = 0,
  callback?: () => {}
) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback && callback());
    }, time);
  });
};
