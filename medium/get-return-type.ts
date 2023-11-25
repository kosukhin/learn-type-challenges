
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type one = MyReturnType<() => string>
type two = MyReturnType<() => 123>