type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [key in keyof T as key extends K ? key : never]: T[key];
} & {
    [key in keyof T as key extends K ? never : key]: T[key];
}
type one = MyReadonly2<Todo1>
type two = MyReadonly2<Todo1, 'title' | 'description'>

interface Todo1 {
    title: string
    description?: string
    completed: boolean
}