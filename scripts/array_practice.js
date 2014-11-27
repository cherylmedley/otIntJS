// add listeners on page load
window.onload = function () {
    document.getElementById("btnGenerateNumbers").addEventListener("click", GenerateNumbers);
}

function GenerateNumbers() {
    var myArray = getRandomArray();

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

function getRandomArray() {
    var myArray = [];
    var userX = Math.round(prompt("Please enter the number of random numbers you'd like returned"));

    for (var i = 0; i < userX; i++) {
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






