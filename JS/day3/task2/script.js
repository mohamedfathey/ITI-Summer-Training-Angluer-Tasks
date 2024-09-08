function changeColor(){
mass = document.getElementById("string").value ;
letter = document.getElementById("letter").value ;
output = document.getElementById("output")
console.log(mass);
// mhmd
// output.innerHTML = '';

var number= []
for( i = 0 ; i < mass.length ; i++){
    if(mass[i] === letter){
        number.push(i)
    }
    
}
console.log(number.length);

// for( i=0 ; i <number.length ; i++){
//     addLabel(output , number[i]);
// }

addLabel(output , number);

}
function addLabel(element, text) {
    var label = document.createElement('div');
    label.className = 'text-label';
    label.innerText = text;
    element.appendChild(label);}