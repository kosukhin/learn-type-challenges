type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}

type one = MyOmit<Todo, 'description'>
type two = MyOmit<Todo, 'description' | 'completed'>

interface Todo {
    title: string
    description: string
    completed: boolean
}