// add listeners on page load
window.onload = function () {
    document.getElementById("btnGenerateNumbers").addEventListener("click", GenerateNumbers);
}

function GenerateNumbers() {
    var numberOfRandom = document.getElementById("NumberOfRandomElements").value;
    var myArray = getRandomArray(numberOfRandom);

    // build array with count of instances
    var numberOfInstancesArray = getArrayWithNumberOfInstances(myArray);

    // update DOM
    document.getElementById("arrayTableContainer").innerHTML = buildPrintMyArray(myArray).outerHTML;
    document.getElementById("numTable").innerHTML = buildPrintArray(numberOfInstancesArray).outerHTML;
    document.getElementById("even").innerHTML = getNumberOfEvenElementsInArray(numberOfInstancesArray);
    document.getElementById("odd").innerHTML = getNumberOfOddElementsInArray(numberOfInstancesArray);
    document.getElementById("most").innerHTML = getNumberWithMostInstances(numberOfInstancesArray);
    document.getElementById("few").innerHTML = getNumberWithFewestInstances(numberOfInstancesArray);
};

function getRandomArray(numberOfRandom) {
    var myArray = [];

    numberOfRandom = Math.round(numberOfRandom);

    for (var i = 0; i < numberOfRandom; i++) {
        myArray[i] = getRandomNumber();
    }

    return myArray;
};

function getRandomNumber() {
    var max = 10;
    var rnd = Math.random() * max;
    var fin = Math.floor((rnd) + 1);
    return fin;
}






