type ReplaceAll<S extends string, From extends string, To extends string> =
      From extends ''
      ? S
      : S extends `${infer V}${From}${infer R}`
        ? `${V}${To}${ReplaceAll<R, From, To>}`
        : S
type one = ReplaceAll<'foobarfoobar', 'ob', 'b'>
type two = ReplaceAll<'foboorfoboar', 'bo', 'b'>
type three = ReplaceAll<'t y p e s', ' ', ''>
