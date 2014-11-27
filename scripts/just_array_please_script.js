window.onload = function () {
    var myArray = [1, 1, 3, 3, 3, 2];
    var minValue = 1;
    var maxValue = 3;

    // build array
    var numberOfInstancesArray = getArrayWithNumberOfInstances(minValue, maxValue, myArray);

    // update DOM
    document.getElementById("arrayTableContainer").appendChild(buildPrintMyArray(myArray));
    document.getElementById("howTableContainer").appendChild(buildPrintArray(numberOfInstancesArray));
    document.getElementById("evens").innerHTML = getNumberOfEvenElementsInArray(numberOfInstancesArray);
    document.getElementById("odds").innerHTML = getNumberOfOddElementsInArray(numberOfInstancesArray);
    document.getElementById("most").innerHTML = getNumberWithMostInstances(numberOfInstancesArray);
    document.getElementById("few").innerHTML = getNumberWithFewestInstances(numberOfInstancesArray);
}


function getArrayWithNumberOfInstances(min, max, myArray) {
    var numberOfInstancesArray = [];

    // go though lowest to highest number
    for (var i = min; i <= max; i++) {
        var numberOfInstances = 0;

        for (var j = 0; j < myArray.length; j++) {
            if (myArray[j] === i) {
                numberOfInstances += 1;
            }
        }

        numberOfInstancesArray.push({
            number: i,
            instances: numberOfInstances
        });
    }

    return numberOfInstancesArray;
};


function buildPrintMyArray(myArray) {
    // create elements
    var list = document.createElement('ul');
    list.className = "unstyled";

    // build list
    for (var i = 0; i < myArray.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = myArray[i];
        list.appendChild(listItem);
    }

    return list;
}


function buildPrintArray(numberOfInstancesArray) {
    // create elements
    var howTable = document.createElement("table");
    var tbody = document.createElement("tbody");
    var thead = document.createElement("thead");
    var rHead = document.createElement("tr");
    var thL = document.createElement("th");
    var thR = document.createElement("th");

    // build table head
    thL.textContent = "Number";
    thR.textContent = "How Many";
    rHead.appendChild(thL);
    rHead.appendChild(thR);
    thead.appendChild(rHead);
    howTable.appendChild(thead);

    // build table body
    for (var i = 0; i < numberOfInstancesArray.length; i++) {
        var row = document.createElement("tr");
        var cellL = document.createElement("td");
        var cellR = document.createElement("td");

        // build first column
        cellL.textContent = numberOfInstancesArray[i].number;
        row.appendChild(cellL);

        // buid second column
        cellR.textContent = numberOfInstancesArray[i].instances;
        row.appendChild(cellR);

        // add row to table body
        tbody.appendChild(row);
    }

    howTable.appendChild(tbody);

    return howTable;
};

function getNumberOfEvenElementsInArray(numberOfInstancesArray) {
    var numEven = 0;

    for (var i = 0; i < numberOfInstancesArray.length; i++) {
        if ((numberOfInstancesArray[i].number % 2) === 0) {
            numEven += numberOfInstancesArray[i].instances;
        }
    }
    return numEven;
};

function getNumberOfOddElementsInArray(numberOfInstancesArray) {
    var numOdd = 0;

    for (var i = 0; i < numberOfInstancesArray.length; i++) {
        if ((numberOfInstancesArray[i].number) % 2 === 1) {
            numOdd += numberOfInstancesArray[i].instances;
        }
    }
    return numOdd;
};

function getNumberWithMostInstances(numberOfInstancesArray) {
    var currentValue, currentNumber, maxValue, maxNumber;

    for (var i = 0; i < numberOfInstancesArray.length; i++) {
        currentNumber = numberOfInstancesArray[i].number;
        currentValue = numberOfInstancesArray[i].instances;

        // get first instance or most value
        if (typeof maxValue === 'undefined' ||
            currentValue > maxValue) {
            maxValue = currentValue;
            maxNumber = currentNumber;
        }
    }

    return maxNumber;
};

function getNumberWithFewestInstances(numberOfInstancesArray) {
    var currentValue, currentNumber, minValue, minNumber;

    for (var i = 0; i < numberOfInstancesArray.length; i++) {

        currentNumber = numberOfInstancesArray[i].number;
        currentValue = numberOfInstancesArray[i].instances;

        // get first or least value
        if (typeof minValue === 'undefined' ||
            currentValue < minValue) {
            minValue = currentValue;
            minNumber = currentNumber;
        }
    }

    return minNumber;
};


