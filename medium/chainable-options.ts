type Chainable<R = object> = {
    option<K extends keyof any, V>(
        key: K extends keyof R
            ? (V extends R[K] ? never : K)
            : K,
        value: V
    ): Chainable<Omit<R, K> & Record<K, V>>
    get(): R
}
declare const a: Chainable

const result1 = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()
