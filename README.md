# delayjs

memo

```js
// time = millisecond
export const sleep = (time, callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback())
    }, time)
  })
}
```
