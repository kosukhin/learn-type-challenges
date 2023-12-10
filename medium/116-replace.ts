
type Replace<S extends string, From extends string, To extends string> =
      From extends ''
      ? S
      : S extends `${infer V}${From}${infer R}`
        ? `${V}${To}${R}`
        : S

type one = Replace<'foobar', 'bar', 'foo'>
type two = Replace<'foobarbar', 'bar', 'foo'>
