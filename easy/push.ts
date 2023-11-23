type Push<T extends any[], U extends any> = [...T, U]
type one = Push<[], 1>
type two = Push<[1, 2], '3'>