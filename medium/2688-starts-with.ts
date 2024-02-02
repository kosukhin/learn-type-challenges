type StartsWith<T extends string, U extends string> = T extends `${U}${string}`?true:false

type one = StartsWith<'abc', 'ac'>
type two = StartsWith<'abc', 'ab'>
type three = StartsWith<'abc', 'abc'>
type four = StartsWith<'abc', 'abcd'>
