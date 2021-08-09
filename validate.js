console.log(validatePIS('234-2222-000-0'))

function validatePIS(matchValue) {
    var matchDigits = matchValue.replace(/[^\d]+/g, '');
    var weights = '3298765432';
    var weightedSum = 0;
    var rest = 0;
    var multiplying = 0;
    var multiplier = 0;
    var digit = 99;

    for (var i = 0; i < 10; i++) {
        multiplying = parseInt(matchDigits.substring(i, i + 1));
        multiplier = parseInt(weights.substring(i, i + 1));
        weightedSum += multiplying * multiplier;
    }

    rest = 11 - (weightedSum % 11);
    rest = rest === 10 || rest === 11 ? 0 : rest;

    digit = parseInt('' + matchDigits.charAt(10));
    return rest === digit;
}
