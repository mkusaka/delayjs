# delayjs

memo

```js
// time = millisecond
export const sleep = (time = 0, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback && callback())
    }, time)
  })
}
```
