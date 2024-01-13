const fns = require('./main');

test('the first t should be capitalized', () => {
    expect(fns.capitalize('this is a test')).toBe('This is a test');
});

test('hello should be olleh', () => {
    expect(fns.reverseString('hello')).toBe('olleh');
});

test('5+3 should be 8', () => {
    expect(fns.Calculator.add(5, 3)).toBe(8);
});

test('10-7 should be 3', () => {
    expect(fns.Calculator.sub(10, 7)).toBe(3);
});

test('10*11 should be 110', () => {
    expect(fns.Calculator.mult(10, 11)).toBe(110);
});

test('144/12 should be 12', () => {
    expect(fns.Calculator.div(144, 12)).toBe(12);
});

test('Hello with a shift of 3 should be Khoor', () => {
    expect(fns.caesarCipher('Hello', 3)).toBe('Khoor');
});

test('Average: 4, Min: 1, Max: 8, Length: 6', () => {
    expect(fns.analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})