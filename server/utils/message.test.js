var expect = require('expect')

var { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
    it('should create correct message object', () => {
        var from = 'Kunanan';
        var text = 'Some text';
        var message = generateMessage(from, text);

        expect(message.createAt).toBeA('number')
        expect(message).toInclude({ from, text })
    });
});


describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Dev';
        var url = 'https://www.google.com/maps?q=15,12'
        var message = generateLocationMessage(from, 15, 12);

        expect(message.createAt).toBeA('number')
        expect(message).toInclude({ from, url })
    })
});