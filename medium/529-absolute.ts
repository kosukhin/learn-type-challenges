type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`
type one = Absolute<-0>
type two = Absolute<'-5'>
type three = Absolute<-1_000_000n>
