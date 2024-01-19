
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;

type two = DropChar<'butter fly!', ' '>;
type three = DropChar<'butter fly!', '!'>;
