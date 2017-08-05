var expect = require('expect')

var { generateMessage } = require('./message')

describe('generateMessage', () => {
    it('should create correct message object', () => {
        var from = 'Kunanan';
        var text = 'Some text';
        var message = generateMessage(from, text);

        expect(message.createAt).toBeA('number')
        expect(message).toInclude({ from, text })

    });
});