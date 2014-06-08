// Basic Operations

function run() {
	var compute = ((13+2)*34-2);
	console.log(compute);

	var string = "IlovemyMacbookPro".length;
	console.log(string);

	var string1 = "Hello";
	var string2 = "World";
	console.log(string1+" "+string2+"!");

	var num = 10;
	console.log(num+=10);
	console.log(num-=10);
	console.log(num*=10);
	console.log(num/=10);

	var str1 = "asdas dasdsadasdasdsad";
	var str2 = "Adasdasdasdasd";

	console.log(str1==str2);

	console.log(str2[0]);

	console.log(str1.charAt(5));

	num = 12345;
	console.log(num);

	var value = 1;
	while(value <= 10) {
		console.log(value);
		value++;
	}

	for(value = 10; value >=1; value--) {
		console.log(value);
	}
}

run(); 


// Loops and Conditionals

function trains(){
	var totalTrains = 12;
	var specialTrain1 = 10;
	var specialTrain2 = 12;
	var operationalTrains = 8;
	var dayOfWeek = "Wed";

	// var i = 1;
	// for(i = 1; i <= operationalTrains; i++) {
	// 	console.log("Train #"+i+" is operational");
	// }

	// for(i = operationalTrains+1; i <= totalTrains; i++) {
	// 	console.log("Train #"+i+" is not operational");
	// }

	//Optimising above approach

	for(i = 1; i <= totalTrains; i++) {
		if(i <= operationalTrains && i != 3) {
			console.log("Train #"+i+" is operational");
		}
		else if(i == specialTrain1 || i == specialTrain2){
			console.log("Train #"+i+" starts at noon");
		}
		else if(i == 3 && dayOfWeek == "Sun") {
			console.log("Train #"+i+" is operational");
		}
		else {
			console.log("Train #"+i+" is not operational");
		}
	}

}

trains();

// Built in Dialogs and Popups

var name;

function username() {
	if(name = prompt("What is your name ?")) {
		if(confirm("Are you sure your name is "+name)) {
			alert("Sup "+name);
		}
		else {
			username();
		}
	}
	else {
		username();
	}	
}

username();
console.log(name);

// Quine
//Print from here
function quine() {
	//Demo to implement a Quine program
}
//till here, in console

console.log(quine);

//Arrays

var list = ["one", "two", "three"];
for(i = 0; i <= list.length-1; i++) {
	console.log(list[i]);
}

list.pop();
console.log(list);

list.push("three");
list.push("four");
console.log(list);



















