// A simple everyday if

// var theThingWotIsTrue = false;

// if (theThingWotIsTrue) {
// 	alert("dawg");
// }

// // Also in one line
// if (theThingWotIsTrue) alert("One line!!");

// if/else
var dolla = prompt("How much money on ya?");
var drinks = prompt("How many drinks you had?");
var crisps = prompt("How much are the crisps?");

if ((dolla > 10) && (drinks < 3)){
	console.log("Buy another drink");
} else if (dolla > 5) {
	console.log("just a beer then.");
} else if (crisps == 0) {
	console.log("i'll buy some crisps");
} else  {
	console.log("Im going home");
}

// Switch statement
var name = "Ollie";

if (name === "Markson") {
	console.log("Good evening Mr Aigbodi");
} else if (name === "Stephen") {
	console.log("Salutations Mr Reid");
} else if (name === "Lexie") {
	console.log("Afternoon chief!");
} else {
	console.log("yo");
}

switch (name) {
	case "Markson":
	console.log("Good evening Mr Aigbodi");
	break;
	case "Stephen":
	console.log("Salutations Mr Reid");
	break;
	case "Lexie":
	console.log("Afternoon chief!");
	break;
	default:
	console.log("Yo");
}
// Comparisons (>,<,>=,<=,==.===)