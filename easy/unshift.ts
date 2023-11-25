type Unshift<T extends unknown[], U> = [U, ...T]
type one = Unshift<[], 1>
type two = Unshift<[1, 2], 0>
type three = Unshift<['1', 2, '3'], boolean>