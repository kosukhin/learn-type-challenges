type MyExclude<T, U> = T extends U ? never : T
type ex1 = MyExclude<1, 1>
type ex2 = MyExclude<1 | 2 | 3, 3>