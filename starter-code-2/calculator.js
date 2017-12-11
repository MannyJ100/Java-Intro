
    // get the user inputs
var value1;
var value2;
var choice;
var loop = "y";
var bmiCalc

while (loop === "y"){
    bmiCalc = prompt("Do you want to use bmi calculator?")
        if (bmiCalc == "y") {
        var weight = parseInt(prompt("what is your weight in kg?"));
        var height = parseFloat(prompt("what is your height in m?"));
        alert(weight / Math.pow(height, 2));
    }

    mortCalc = prompt("Do you want to use our mortgage calculator?")
    	if (mortCalc == "y") {
    	var loan = parseInt(prompt("What is your loan amount?"));
    	var interest = parseFloat(prompt("What is your monthly interest rate?"));
    	var months = parseInt(prompt("Number of months in the loan"));
    	alert(loan *(interest * Math.pow(1 + interest, months) / Math.pow(1 + interest, months) - 1));
    	}

    choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (sq)are-root (p)ower") || ("a");
    value1 = parseInt(prompt("Enter first value")); 
    value2 = parseInt(prompt("Enter the second value"));

    switch (choice) {
        case "a":
        alert(value1 + value2);
        break;
        case "s":
        alert(value1 - value2);
        break;    
        case "m":
        alert(value1 * value2);
        break;    
        case "d":
        alert(value1 / value2);
        break;
        case "sq":
        alert(Math.sqrt(value1));
        break;
        case "p":
        alert(Math.pow(value1, value2));
        break;
        default:
        alert("Unrecognised Input");        
    }
    loop = prompt("Run again y/n?");
}
