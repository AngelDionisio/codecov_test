const adders = {
    add: function (x, y) {
        return x + y;
    },
    
    arrayAdder: function (arr) {
        return arr.reduce(add);
    }    
}

module.exports = adders;

// function add(x, y) {
//     return x + y;
// }

// function arrayAdder(arr) {
// 	return arr.reduce(add);
// }

// module.exports = {
//     add,
//     arrayAdder
// };