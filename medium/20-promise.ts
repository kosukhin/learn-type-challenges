
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [P in keyof T]: T[P] extends Promise<infer R> | infer R ? R : never
  }>

  const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
  const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
  const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
  const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])
