type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never
type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Case2 = AppendArgument<() => void, undefined>
