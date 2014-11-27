window.onload = function () {
    var myArray = [1, 1, 3, 3, 3, 2, 5];

    // build array with count of instances
    var numberOfInstancesArray = getArrayWithNumberOfInstances(myArray);

    // update DOM
    document.getElementById("arrayTableContainer").appendChild(buildPrintMyArray(myArray));
    document.getElementById("howTableContainer").appendChild(buildPrintArray(numberOfInstancesArray));
    document.getElementById("evens").innerHTML = getNumberOfEvenElementsInArray(numberOfInstancesArray);
    document.getElementById("odds").innerHTML = getNumberOfOddElementsInArray(numberOfInstancesArray);
    document.getElementById("most").innerHTML = getNumberWithMostInstances(numberOfInstancesArray);
    document.getElementById("few").innerHTML = getNumberWithFewestInstances(numberOfInstancesArray);
}

