type AnyOf<T extends readonly any[]> = T extends Array<0 | '' | undefined | null | false | [] | Record<string, never>> ? false : true

type one = AnyOf<[0, '', false, [], {}, undefined, null]>
