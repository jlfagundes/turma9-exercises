const { TestScheduler } = require("jest");

const multiplyByTwo = (number) => {
    if (!number) {
        throw new Error('number is undefined')
    }
    return number * 2;
}
multiplyByTwo(4);

test('Test if multiplyByTwo return result multiplication', () => {
    expect(multiplyByTwo(4)).toBe(8)
});

test('Test if lanced error and case undefined', () => {
    expect(() => { multiplyByTwo() }).toThrow();
});

test('test if mensage error is "number is undefined"', () => {
    expect( () => { multiplyByTwo() }).toThrowError('number is undefined')
});
