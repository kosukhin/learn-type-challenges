type Flatten<S extends any[], T extends any[] = []> =  S extends [infer X, ...infer Y] ?
  X extends any[] ?
   Flatten<[...X, ...Y], T> : Flatten<[...Y], [...T, X]>
  : T
type one = Flatten<[1, [2]]>
type two = Flatten<[1, 2, [3, 4], [[[5]]]]>
