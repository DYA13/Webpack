type culcFunc = (a: number, b: number) => number | Promise<number>

export const mult: culcFunc = (a, b) => a * b
export const sum: culcFunc = async (a, b) => a + b
