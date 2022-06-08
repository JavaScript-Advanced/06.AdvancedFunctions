function add(a) {
    let sum = 0;

    function calc(b) {
        sum += b;
        return calc;
    }

    calc.toString = () => {
        return sum;
    }

    return calc(a);
}

console.log(add(1)(6)(-3).toString());