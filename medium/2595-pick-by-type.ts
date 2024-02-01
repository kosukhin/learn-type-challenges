type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] }

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type one = PickByType<Model, boolean>
type two = PickByType<Model, string>
type three = PickByType<Model, number>
