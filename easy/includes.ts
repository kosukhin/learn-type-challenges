type Includes<T extends readonly unknown[], U> =
    T extends [infer First, ...infer Rest]
        ? Equal<First, U> extends true ? true : Includes<Rest, U>
        : false;
type exone = Includes<['one', 'two'], 'one'>
type extwo = Includes<[1 | 2], 1>
