type Pop<T extends any[]> = T extends [...infer I, infer _] ? I : []
type one = Pop<[3, 2, 1]>
type two = Pop<['a', 'b', 'c', 'd']>
type three = Pop<[]>