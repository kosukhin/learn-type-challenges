type MyReadonly<T> = {
    readonly [n in keyof T]: T[n]
}