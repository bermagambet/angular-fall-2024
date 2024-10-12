// Generic
type MyPersonalType = {
    myFunction: (_arg1: Array<number>) => undefined
}

interface MyPersonalInterface<T> {
    myFunction: (_arg1: T) => T
}

const a: MyPersonalInterface<string> = {
    myFunction: (arg: string) => {
        return arg
    }
}

interface MyArray<T> {
    push: (_arg: T) => undefined;
}