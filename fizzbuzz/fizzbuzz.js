
var i = prompt("Choose a value")

if (i % 3 == 0 && i % 5 == 0) {
  alert("Fizzbuzz")
} else if (i % 3 == 0) {
  alert("fizz") 
}  else if (i % 5 == 0) {
  alert("buzz")
}  else {
  		console.log(i)
}