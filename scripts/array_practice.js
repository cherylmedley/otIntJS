//add listeners on page load
window.onload = function () {
	document.getElementById("NumberOfRandomElements").addEventListener("keyup",GenerateNumbers);
	document.getElementById("NumberOfRandomElements").addEventListener("mouseup",GenerateNumbers);	
	/* tried to add min/max. didn't behave
	document.getElementById("MinValue").addEventListener("keyup",GenerateNumbers);
	document.getElementById("MinValue").addEventListener("mouseup",GenerateNumbers);	
	document.getElementById("MaxValue").addEventListener("keyup",GenerateNumbers);
	document.getElementById("MaxValue").addEventListener("mouseup",GenerateNumbers); */
};

function GenerateNumbers (){
	var myArray = getRandomArray(this.value); //gathers random numbers	based on numberOfRandom from user
	var min = 1
	var max = 10
	
	//build array with count of instances
	var numberOfInstancesArray = getArrayWithNumberOfInstances(myArray);
	
	//updates to the DOM (pulling everything out that changes the HTML stuff)
	
	//print the random numbers array, instances
	document.getElementById("arrayTableContainer").innerHTML = buildPrintMyArray(myArray).outerHTML;
	document.getElementById("howTableContainer").innerHTML = buildPrintArray(numberOfInstancesArray).outerHTML;
	
	//print random number array statistics
	document.getElementById("even").innerHTML = getNumberOfEvenElementsInArray(numberOfInstancesArray);
	document.getElementById("odd").innerHTML = getNumberOfOddElementsInArray(numberOfInstancesArray);
	document.getElementById("most").innerHTML = getNumberWithMostInstances(numberOfInstancesArray);
	document.getElementById("few").innerHTML = getNumberWithFewestInstances(numberOfInstancesArray);

};


function getRandomArray(numberOfRandom){
	var myArray = [];
	
	numberOfRandom = Math.round(numberOfRandom);
	for (var i = 0; i < numberOfRandom; i++){
		myArray[i]=getRandomNumber();
	}
};

function getRandomNumber() {
	var max = 10;
    var rnd = Math.random() * max;
	var fin = Math.floor((rnd)+1);
	return fin
}
