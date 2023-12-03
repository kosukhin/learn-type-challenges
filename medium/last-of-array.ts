type Last<T extends any[]> = [any, ...T][T["length"]];
type one = Last<[2]>
type two = Last<[3, 2, 1]>
type three = Last<[() => 123, { a: string }]>