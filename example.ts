import '@babel/polyfill'

// time = millisecond
export const sleep = (
  time: number = 0,
  callback?: Function
) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback && callback());
    }, time);
  });
};
