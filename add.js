const adders = {
    add: (x, y) => {
        return x + y;
    },

    arrayAdder: (arr) => {
        return arr.reduce(add);
    },

    addOne: (x) => {
        return x + 1;
    }
}

module.exports = adders;
