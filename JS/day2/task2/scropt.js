


function toConvertToUpperCase (text){
myArray = text.split(" ");
x = myArray.length;

console.log(x);

// console.log(myArray);
for( i=0 ; i< x ; i++ ){

    console.log((myArray[i].charAt(0).toUpperCase()).concat(myArray[i].slice(1)));
}
}
text = "Enter Your massage"
toConvertToUpperCase(text);
// `<h1>${toConvertToUpperCase(text)}</h1>`
