var expect = require('expect')
var { isRealString } = require('./validation')

describe('Is Real String', () => {
    it('should reject non-string value', () => {
        var res = isRealString(98)
        expect(res).toBe(false)
    });

    it('should reject string with only space', () => {
        var res = isRealString('       ')
        expect(res).toBe(false)
    });

    it('should allow string with non-space character', () => {
        var res = isRealString('     Kunanan   ')
        expect(res).toBe(true)
    });
});