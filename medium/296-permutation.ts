// Объяснение - https://github.com/type-challenges/type-challenges/issues/614
type Permutation<T, K=T> =
    [T] extends [never]
      ? []
      : K extends K
        ? [K, ...Permutation<Exclude<T, K>>]
        : never
type one = Permutation<'A' | 'B' | 'C'>
type two = Permutation<boolean>
