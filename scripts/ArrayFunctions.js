
function getArrayWithNumberOfInstances(myArray){
	var numberOfInstancesArray = [];
	var min = 1;
	var max = 10;
	
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
		instances: numberOfInstances
	});
	}
	return numberOfInstancesArray;
};

function buildPrintMyArray(myArray){
	//create elements
	var list = document.createElement("ul");
	list.className = "unstyled";
	
	//build list
	for(var i = 0; i < myArray.length; i++){
		var listItem = document.createElement("td");
		listItem.innerHTML = myArray[i];
		list.appendChild(listItem);
	}
	return list;
};

function buildPrintArray(numberOfInstancesArray){
	var min = 1;
	var max = 10;

	//create elements
	var howTable = document.getElementById("table");
	var tbody = document.createElement("tbody");
	var thead = document.createElement("thead");
	var rHead = document.createElement("tr");
	var thL = document.createElement("th");
	var thR = document.createElement("th");
	
	//build table header
	thL.textContent = "Number";
	thR.textContent = "How Many";
	rHead.appendChild(thL);
	rHead.appendChild(thR);
	thead.appendChild(rHead);
	howTable.appendChild(table);
	
	//build table body
	for (i = 0; i <= numberOfInstancesArray.length; i++){
		var row = document.createElement("tr");
		var cellL = document.createElement("td");
		var cellR = document.createElement("td");
		
		// build first column
		cellL.textContent = numberOfInstancesArray[i].number;
		row.appendChild(cellL);
		
		//build second column
		cellR.textContent = numberOfInstancesArray[i].instances;
		row.appendChild(cellR);
		
		//attach row to tbody
		tbody.appendChild(row);
	}

//attach tbody to table
howTable.appendChild(table);

return howTable;
};

function getNumberOfEvenElementsInArray(numberOfInstancesArray){
	var numEven = 0;
	
	for (var i = 0;i < numberOfInstancesArray.length; i++){
		if((numberOfInstancesArray[i].number %2) === 0){
		numEven += numberOfInstancesArray[i].instances;
		}
	}
	return numEven;
};

function getNumberOfOddElementsInArray(numberOfInstancesArray){
	var numOdd = 0;
	
	for (i = 0; i < numberOfInstancesArray.length; i++){
		if((numberOfInstancesArray[i].number %2) === 1){
		numOdd += numberOfInstancesArray[i].instances;
		}
	}
	return numOdd;
};

function getNumberWithMostInstances(numberOfInstancesArray){

	for(i = 0; i < numberOfInstancesArray.length; i++){
	var greater = 0;
		for (j = 0; j < numberOfInstancesArray.length; j++){
			if(numberOfInstancesArray[i]>numberOfInstancesArray[j]){
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
			for (j = 0; j < numberOfInstancesArray.length; j++){
				if(numberOfInstancesArray[i]<numberOfInstancesArray[j]){
					lesser += 1;
				}
				if(lesser===numberOfInstancesArray.length-1){
					document.getElementById("few").textContent = i+1 + " with " + numberOfInstancesArray[i];
				}
			}
	}
};