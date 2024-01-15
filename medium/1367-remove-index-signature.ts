/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium #object-keys

  ### Question

  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

  For example:

  ```ts
  type Foo = {
    [key: string]: any
    foo(): void
  }

  type A = RemoveIndexSignature<Foo> // expected { foo(): void }
  ```

  > View on GitHub: https://tsch.js.org/1367
*/

/* _____________ Your Code Here _____________ */

type RemoveIndexSignature<T, P=PropertyKey> = {
    [K in keyof T as P extends K? never : K extends P ? K : never]: T[K]
  }

  type Foo = {
    [key: string]: any
    foo(): void
  }

  type Bar = {
    [key: number]: any
    bar(): void
    0: string
  }

  const foobar = Symbol('foobar')
  type FooBar = {
    [key: symbol]: any
    [foobar](): void
  }

  type Baz = {
    bar(): void
    baz: string
  }

type one = RemoveIndexSignature<Foo>
type two = RemoveIndexSignature<Bar>
