
type DeepReadonly<T> = {
    readonly [k in keyof T]: T[k] extends Record<any, any>
        ? T[k] extends Function
            ? T[k]
            : DeepReadonly<T[k]>
        : T[k]
}
type one = DeepReadonly<X1>
type two = DeepReadonly<X2>


type X1 = {
    a: () => 22
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 'string'
                }
                k: 'hello'
            }
            l: [
                'hi',
                {
                    m: ['hey']
                },
            ]
        }
    }
}

type X2 = { a: string } | { b: number }