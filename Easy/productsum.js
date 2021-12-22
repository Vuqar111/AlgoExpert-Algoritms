var subtractProductAndSum = function(n) {
    // Initialize the sum and the product with neutral values
    var sum = 0;
    var product = 1;

    while (n > 0) {
        var digit = n % 10;
        sum += digit;
        product *= digit;
        n = Math.floor(n / 10);
    }

    return product - sum;
};
console.log(subtractProductAndSum(234))
