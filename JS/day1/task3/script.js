count =0
var mass =prompt("Enter Your Massage")
for( i = 0 ; i < mass.length ; i++){
    if(mass[i] == 'e'){
        count++
    }
}
document.writeln(`<h1> the count is <mark>${ count} </mark> and the massage ${mass} </h1>`)
console.log (count +"    "+ mass)

