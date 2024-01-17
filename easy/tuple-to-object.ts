
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [k in T[number]]: k
}

type one = TupleToObject<[one: number, two: string]>
