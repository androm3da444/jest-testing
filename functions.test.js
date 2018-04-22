const functions = require ('./functions');

test('Add two numbers to output the correct result', ()=> {
    expect(functions.add(3, 4).toBe(7));
});