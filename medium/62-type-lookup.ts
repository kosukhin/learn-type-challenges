
type LookUp<U, T> = U extends {type: T} ? U : never;

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type one = LookUp<Animal, 'dog'>
type two = LookUp<Animal, 'cat'>
