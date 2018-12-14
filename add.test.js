const adders = require('./add');

test('adds 1 + 2 to equal 3', () => {
    expect(adders.add(1,2)).toBe(3);
});
