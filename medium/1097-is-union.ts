type IsUnion<T, B = T> = T extends B ? [B] extends [T] ? false : true : never;
type one = IsUnion<string>
type two = IsUnion<'a' | 'b' | 'c' | 'd'>

// https://tsch.js.org/1097
