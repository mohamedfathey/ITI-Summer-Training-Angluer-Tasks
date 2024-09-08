document.writeln(`<h1> Adding -- Multiplying -- and dividing 3 values </h1>`)
// `<hr>`
sum = prompt("your number to sum")
mult = prompt("Enter your data to Multiplying ")
divi = prompt("Enter your data to dividing ")

totalSum = sum.split("+")
sumorg =parseInt(totalSum[0])+parseInt(totalSum[1])+parseInt(totalSum[2])
document.writeln(`<h1> <mark>sum of the 3 values is ${sum}  ${sumorg}</mark></h1>`)

totalmult = mult.split("*")
multorg =parseFloat(totalmult[0])*parseFloat(totalmult[1])*parseFloat(totalmult[2])
document.writeln(`<h1> <mark>Multiplying of the 3 values is ${mult}  ${multorg}</mark></h1>`)

totaldivi = divi.split("/");
console.log(totaldivi);

diviorg =parseFloat(totaldivi[0]) / parseFloat(totaldivi[1]) / parseFloat(totaldivi[2])
document.writeln(`<h1> <mark>dividing of the 3 values is ${divi} ${diviorg}</mark></h1>`)



