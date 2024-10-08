function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestKey = null;
    let closestDifference = Infinity;
 
    for (const key in functionsObj) {
        const result = functionsObj[key](inputNumber);
        const difference = Math.abs(result - outputNumber);

        if (difference < closestDifference) {
            closestDifference = difference;
            closestKey = key;
        }
    }
 
    return closestKey;
}
