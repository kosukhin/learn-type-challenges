//type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
type TupleToUnion<T extends Array<any>> = T[number]
type one = TupleToUnion<[123, '456', true]>
type two = TupleToUnion<[123]>