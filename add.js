const adders = {
    add: (x, y) => {
        return x + y;
    },
    
    arrayAdder: (arr) => {
        return arr.reduce(add);
    }    
}

module.exports = adders;
