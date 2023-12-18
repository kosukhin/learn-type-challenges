
// type StringToUnion<
//   S extends string,
//   T extends string[] = []
// > = S extends `${infer F}${infer R}`
//   ? StringToUnion<R, [...T, F]>
//   : T[number];
type StringToUnion<T extends string> = T extends `${infer Letter}${infer Rest}`
  ? Letter | StringToUnion<Rest>
  : never;

type one = StringToUnion<'hello'>
type two = StringToUnion<'coronavirus'>
