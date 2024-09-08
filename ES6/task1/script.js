function swap1(){
let a = 4;

let b = a;

a = 5;

console.log("a : ", a);
console.log("b : ", b);
}
swap1();

function swap2 (){
    var a = 5 ;
    var b = 6 ;
    var arr =[a,b]
    a = arr[1];
    b =arr [0];
    console.log("a : " , a);
    console.log("b : " , b);
}
swap2();


function displayMaxMin (arr = []){
    console.log("the max value is : ",Math.max(...arr));
    console.log("the min value is : " , Math.min(...arr));
}
displayMaxMin([111,2,3,56,8,12,23,])


function arratApi(){

var fruits = ["apple", "strawberry", "banana", "orange",
    "mango"]
    // let result = fruits.every((item)=>{
    //     console.log(item);
    // })


    // let result2 = fruits.some((item)=>{
    //     console.log(item.startsWith("a"));
    // }) 
    // console.log(result2);


    // let result3 = fruits.filter(item => item.startsWith('b') || item.startsWith('s'));
    //     console.log(result3);


    // let result4 = fruits.map(fruit => `I like ${fruit}`);
    // console.log(result4);
        
    // let result5 = fruits.map(fruit => `I like ${fruit}`);
    // result5.forEach(item => console.log(item));
}
arratApi();
    

