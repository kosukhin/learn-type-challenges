
type IsNever<T> = [T] extends [never] ? true : false
type one = IsNever<never>
type two = IsNever<never | string>
