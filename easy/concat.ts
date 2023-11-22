type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]
type exone = Concat<[1], [2]> // [1, 2]
type extwo = Concat<[], [1]> // [1]
type exthree = Concat<['1', 2, '3'], [false, boolean, '4']> // ['1', 2, '3', false, boolean, '4']
