# delayjs

memo

```ts
// time = millisecond
export const sleep: (time: string, callback: () => {}) => Promise<any> = (time: number, callback: () => {}) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback())
    }, time)
  })
}
```
