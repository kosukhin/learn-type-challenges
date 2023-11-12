
type MyPick<T, K extends keyof T> = {
    [n in K]: T[n]
}
