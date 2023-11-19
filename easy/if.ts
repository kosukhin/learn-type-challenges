type If<C extends boolean, T extends any, F extends any> = C extends true ? T : F
type exone = If<true, 'a', 'b'>
type extwo = If<false, 'a', 2>