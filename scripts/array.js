
var myArray = []
var userX = 0 //myArray.length
var min = 1
var max = 10

var howManyArray = [];

function onClick(){
myRndArray();
howManyMakeArray();
printArray();
howManyEachPrint();
even();
odd();
most();
fewest();
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

function howManyMakeArray(){

for (i=min; i<(max+1); i++){
var howMany = 0
for (b=0;b<myArray.length;b++){
	if (myArray[b] === i){
	howMany += 1;
	
	}
	else{
	}
	
}
howManyArray[i-1]=howMany
}
};

function printArray(){

var container = document.getElementById("arrayTableCont")
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var row = document.createElement("tr");
for(i=0;i<myArray.length;i++){
var cell = document.createElement("td");
cell.textContent = myArray[i];
row.appendChild(cell);
}
tbody.appendChild(row);
table.appendChild(tbody);
container.appendChild(table);
};


function howManyEachPrint(){
var container = document.getElementById("numTable");
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var thead = document.createElement("thead");
var rowHead = document.createElement("tr");
var cellHead1 = document.createElement("th");
var cellHead2 = document.createElement("th");
cellHead1.textContent = "Number";
cellHead2.textContent = "How Many";
rowHead.appendChild(cellHead1);
rowHead.appendChild(cellHead2);
thead.appendChild(rowHead);
table.appendChild(thead);
container.appendChild(table);
for (i=min; i<max+1; i++){
var row = document.createElement("tr");
// create cellL
var cellL = document.createElement("td");
cellL.textContent = i;
row.appendChild(cellL);
//create cellR (integrate searching array function using a for loop based on userX)
var cellR = document.createElement("td");
cellR.textContent = howManyArray[i-1];
row.appendChild(cellR);
//attach row to tbody
tbody.appendChild(row);
}


//attach tbody to table
table.appendChild(tbody);
container.appendChild(table);



};

function even(){
var numEven = 0;
for (b=0;b<howManyArray.length;b++){
if((b+1)%2===0){
numEven += howManyArray[b];
}
else{}
}
document.getElementById("even").textContent = numEven;
};

function odd(){
var numOdd = 0;
for (b=0;b<howManyArray.length;b++){
if((b+1)%2===1){
numOdd += howManyArray[b];
}
else{}
}
document.getElementById("odd").textContent = numOdd;
};

function most(){
	for(i=0;i<howManyArray.length;i++){
	var greater = 0;
		for (b=0;b<howManyArray.length;b++){
			if(howManyArray[i]>howManyArray[b]){
				greater += 1;
			}
			else{}
			if(greater===howManyArray.length-1){
			document.getElementById("most").textContent = i+1 + " with " + howManyArray[i];
			}
			else{}


		}
	}

};
function fewest(){
for(i=0;i<howManyArray.length;i++){
	var lesser = 0;
		for (b=0;b<howManyArray.length;b++){
			if(howManyArray[i]<howManyArray[b]){
				lesser += 1;
			}
			else{}
			if(lesser===howManyArray.length-1){
			document.getElementById("few").textContent = i+1 + " with " + howManyArray[i];
			}
			else{}
		}
	}
};