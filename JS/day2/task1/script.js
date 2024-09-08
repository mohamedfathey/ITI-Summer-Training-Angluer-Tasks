
function toGetsgNmber (){


// var arr=prompt("Enter your number ")
// document.writeln(`<h1>${arr}</h1>`)

arr = [1,3,5,8,6,4,32,84]


mx = arr[0]
mn = arr[0]
for( i=0 ; i<arr.length ; i++){
    if(mx<arr[i+1])
        mx = arr[i+1]
    
    if(mn>arr[i+1])
        mx = arr[i+1]
}
arr = arr.filter(num=> num !== mx && num !== mn);

// console.log(mn);
// console.log(mx);

// console.log(arr);

newMx = arr[0]
newMn = arr[0]
for( i=0 ; i<arr.length ; i++){
    if(newMx<arr[i+1])
        newMx = arr[i+1]
    
    if(newMn>arr[i+1])
        newMn = arr[i+1]
    }

//     console.log(newMx);
// console.log(newMn);

document.writeln(`<h1>${newMx}    ${newMn}</h1>`)

}

toGetsgNmber()