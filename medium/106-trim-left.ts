type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
type one = TrimLeft<'str'>
type two = TrimLeft<' str'>
type three = TrimLeft<'     str'>
