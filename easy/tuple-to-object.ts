
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [k in T[number]]: k
}