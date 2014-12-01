//add listeners on page load
window.onload = function () {

var myArray = []
var userX = 0 //myArray.length. This is a prompted value for how many random numbers the user wants.
var min = 1 //could be a user prompted value. The minimum value for a random number
var max = 10 //could be a user prompted value. The maximum value for a random number

//pull all the methods together

	//build array
	var numberOfInstancesArray = getArrayWithNumberOfInstances(min, max, myArray);

	//print array
	printMyArray(myArray);
	buildPrintArray(numberOfInstancesArray);
	
	//array statistics
	even(numberOfInstancesArray);
	odd(numberOfInstancesArray);
	most(numberOfInstancesArray);
	fewest(numberOfInstancesArray);
};

function myRandom() {
    var rnd = Math.random() * max;
	var fin = Math.floor((rnd)+1);
	return fin
}

function myRndArray(){

var userX = Math.round(prompt("Please enter the number of random numbers you'd like returned"));
	for (i=0; i < userX; i++){
		myArray[i]=myRandom();
	}
};

function getArrayWithNumberOfInstances(min, max, myArray){
	var numberOfInstancesArray = [];
	
	//check the array for instances of the lowest possible value to the highest possible value
	for (var i = min; i <= max; i++){
		var numberOfInstances = 0;
		
		//get number of instances (cycle through each position j in the array to check for the value i)
		for (var j = 0; j < myArray.length; j++){
			if (myArray[j] === i){
			 numberOfInstances += 1;
			}
		}
	//add number and count to array using objects instead of complicated position array silliness	
	numberOfInstancesArray.push({
		number: i,
		instances: numberOfInstances;
	});
	}
	return numberOfInstancesArray;
};

function printMyArray(myArray){

	var container = document.getElementById("arrayTableContainer")
	var table = buildPrintMyArray(myArray);
	container.appendChild(table);
}

function buildPrintMyArray(myArray){
	//create elements
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	var row = document.createElement("tr");
	for(i=0;i<myArray.length;i++){
		var cell = document.createElement("td");
		cell.textContent = myArray[i];
		row.appendChild(cell);
	}
	
	//add elements to the page
	tbody.appendChild(row);
	table.appendChild(tbody);
	
	return table;
};

function buildPrintArray(numberOfInstancesArray){
	//create elements
	var howTable = document.getElementById("numTable");
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	var thead = document.createElement("thead");
	var rowHead = document.createElement("tr");
	var cellHead1 = document.createElement("th");
	var cellHead2 = document.createElement("th");
	
	//build table header
	cellHead1.textContent = "Number";
	cellHead2.textContent = "How Many";
	rowHead.appendChild(cellHead1);
	rowHead.appendChild(cellHead2);
	thead.appendChild(rowHead);
	table.appendChild(thead);
	howTable.appendChild(table);
	
	//build table body
	for (i=min; i<max+1; i++){
		var row = document.createElement("tr");
		var cellL = document.createElement("td");
		var cellR = document.createElement("td");
		
		// build first column
		cellL.textContent = i;
		row.appendChild(cellL);
		
		//build second column
		cellR.textContent = numberOfInstancesArray[i-1];
		row.appendChild(cellR);
		
		//attach row to tbody
		tbody.appendChild(row);
	}

//attach tbody to table
table.appendChild(tbody);
howTable.appendChild(table);
};

function even(){
	var numEven = 0;
	for (i = 0;i < numberOfInstancesArray.length;i++){
		if((i + 1)%2===0){
		numEven += numberOfInstancesArray[i];
		}
	}
	document.getElementById("even").textContent = numEven;
};

function odd(){
	var numOdd = 0;
	for (i = 0;i < numberOfInstancesArray.length;i++){
		if((i + 1)%2===1){
		numOdd += numberOfInstancesArray[i];
		}
	}
	document.getElementById("odd").textContent = numOdd;
};

function most(){
	for(i=0;i<numberOfInstancesArray.length;i++){
	var greater = 0;
		for (b=0;b<numberOfInstancesArray.length;b++){
			if(numberOfInstancesArray[i]>numberOfInstancesArray[b]){
				greater += 1;
			}
			if(greater===numberOfInstancesArray.length-1){
			document.getElementById("most").textContent = i+1 + " with " + numberOfInstancesArray[i];
			}
		}
	}

};
function fewest(){
	for(i=0;i<numberOfInstancesArray.length;i++){
		var lesser = 0;
			for (b=0;b<numberOfInstancesArray.length;b++){
				if(numberOfInstancesArray[i]<numberOfInstancesArray[b]){
					lesser += 1;
				}
				if(lesser===numberOfInstancesArray.length-1){
					document.getElementById("few").textContent = i+1 + " with " + numberOfInstancesArray[i];
				}
			}
	}
};