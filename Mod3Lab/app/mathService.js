function add(first, second) {
    'use strict';
    return first + second;
}

function subtract(first, second) {
    'use strict';
    return first - second;
}

function multiply(first, second) {
    'use strict';
    return first * second;
}

function divide(first, second) {
    'use strict';
    return first / second;
}

function power(first, second) {
    'use strict';
    var result = 1, i;
    for (i = 0; i < second; i += 1) {
        result *= first;
    }
    return result;
}

function squareRoot(num) {
    'use strict';
    return Math.sqrt(num);
}

var mathService = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    power: power,
    squareRoot: squareRoot
};