type Length<T extends readonly any[]> = T["length"]
type ex1 = Length<[1, '2']>
type ex2 = Length<[]>