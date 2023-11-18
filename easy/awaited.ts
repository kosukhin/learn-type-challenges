type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer P> ? (P extends PromiseLike<any> ? MyAwaited<P> : P) : never
type exo = MyAwaited<Promise<Promise<string | number>>>
type extwo = MyAwaited<Promise<string>>