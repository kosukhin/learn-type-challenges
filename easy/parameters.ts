type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : []

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type one = MyParameters<typeof foo>
type two = MyParameters<typeof bar>
type three = MyParameters<typeof baz>