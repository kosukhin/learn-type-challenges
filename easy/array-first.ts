
type First2<T extends any[]> = T extends [infer P, ...any[]] ? P : never
type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
type Length<T extends any[]> = T["length"] extends 0 ? 'zero' : 'morezero'
type empty = First<[]>
type first = First<['hello']>
type len = Length<[]>
type len2 = Length<[1, 2, 3]>