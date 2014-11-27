window.onload = function () {
    var myArray = [1, 1, 3, 3, 3, 2];
    var minValue = 1;
    var maxValue = 3;

    // build array
    var howManyArray = howManyMakeArray(minValue, maxValue, myArray);

    // update DOM
    document.getElementById("arrayTableContainer").appendChild(buildPrintMyArray(myArray));
    document.getElementById("howTableContainer").appendChild(buildPrintArray(howManyArray));
    document.getElementById("evens").innerHTML = getNumberOfEvenElementsInArray(howManyArray);
    document.getElementById("odds").innerHTML = getNumberOfOddElementsInArray(howManyArray);
    document.getElementById("most").innerHTML = getNumberWithMostInstances(howManyArray);
    document.getElementById("few").innerHTML = getNumberWithFewestInstances(howManyArray);
}


function howManyMakeArray(min, max, myArray) {
    var howManyArray = [];

    // go though lowest to highest number
    for (var i = min; i <= max; i++) {
        var howManyTimesDoesTheValueOccur = 0;

        for (var j = 0; j < myArray.length; j++) {
            if (myArray[j] === i) {
                howManyTimesDoesTheValueOccur += 1;
            }
        }
        howManyArray[i - 1] = howManyTimesDoesTheValueOccur;
    }

    return howManyArray;
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


function buildPrintArray(howManyArray) {
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
    for (var i = 0; i < howManyArray.length; i++) {
        var row = document.createElement("tr");
        var cellL = document.createElement("td");
        var cellR = document.createElement("td");

        // build first column
        cellL.textContent = i + 1;
        row.appendChild(cellL);

        // buid second column
        cellR.textContent = howManyArray[i];
        row.appendChild(cellR);

        // add row to table body
        tbody.appendChild(row);
    }

    howTable.appendChild(tbody);

    return howTable;
};

function getNumberOfEvenElementsInArray(howManyArray) {
    var numEven = 0;

    for (var i = 0; i < howManyArray.length; i++) {
        if ((i + 1) % 2 === 0) {
            numEven += howManyArray[i];
        }
    }
    return numEven;
};

function getNumberOfOddElementsInArray(howManyArray) {
    var numOdd = 0;

    for (var i = 0; i < howManyArray.length; i++) {
        if ((i + 1) % 2 === 1) {
            numOdd += howManyArray[i];
        }
    }
    return numOdd;
};

function getNumberWithMostInstances(howManyArray) {
    var currentValue, currentNumber, maxValue, maxNumber;

    for (var i = 0; i < howManyArray.length; i++) {
        currentNumber = i + 1;
        currentValue = howManyArray[i];

        // get first instance or most value
        if (typeof maxValue === 'undefined' ||
            currentValue > maxValue) {
            maxValue = currentValue;
            maxNumber = currentNumber;
        }
    }

    return maxNumber;
};

function getNumberWithFewestInstances(howManyArray) {
    var currentValue, currentNumber, minValue, minNumber;

    for (var i = 0; i < howManyArray.length; i++) {
        currentNumber = i + 1;
        currentValue = howManyArray[i];

        // get first or least value
        if (typeof minValue === 'undefined' ||
            currentValue < minValue) {
            minValue = currentValue;
            minNumber = currentNumber;
        }
    }

    return minNumber;
};


