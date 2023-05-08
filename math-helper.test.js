const {mean, median, mode} = require('./math-helper')

describe('testing for accuracy of mean function', () => {
    test('testing something easy', () => {
        let result = mean(['1','2','3','4','5','6','7','8','9']);
        expect(result).toEqual(5);
    });
    test('testing with negative numbers', () => {
        let result = mean(['4','7','-3','16']);
        expect(result).toEqual(6);
    });
    test('testing for decimal result', () => {
        let result = mean(['2','3','2.5']);
        expect(result).toEqual(2.5);
    });
});

describe('testing for accuracy of median function', () => {
    test('testing something easy', () => {
        let result = median(['1','2','3','4','5','6','7','8','9']);
        expect(result).toEqual(5);
    });
    test('testing in reverse for sorting', () => {
        let result = median(['9','8','7','6','5','4','3','2','1']);
        expect(result).toEqual(5);
    });
    test('testing with negative numbers', () => {
        let result = median(['4','7','-3','16','-21']);
        console.log(result)
        expect(result).toEqual(4);
    });
    test('testing with an even number of inputs', () => {
        let result = median(['1','2','3','4','5','6']);
        console.log(result)
        expect(result).toEqual(3.5);
    });
});

describe('testing for accuracy of mode function', () => {
    test('testing something easy', () => {
        let result = mode(['1','2','3','4','5','6','7','8','9','2']);
        expect(result).toEqual(2);
    });
    test('testing something else easy', () => {
        let result = mode(['1','2','1','2','1','2','1','2','1']);
        expect(result).toEqual(1);
    });
});