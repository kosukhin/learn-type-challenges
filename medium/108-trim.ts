type Pat = ' ' | '\n' | '\t'
// type Trim<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}` ? Trim<T> : S;
type Trim<S extends string> = S extends `${Pat}${infer R}` ? Trim<R> : S extends `${infer R}${Pat}` ? Trim<R> : S
type ones = Trim<' str'>
type twos = Trim<'     str     '>
type threes = Trim<'     str'>
type four = Trim<'str   '>
