
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type one = Diff<Foo, Bar>
type two = Diff<Bar, Foo>
type three = Diff<Foo, Coo>
