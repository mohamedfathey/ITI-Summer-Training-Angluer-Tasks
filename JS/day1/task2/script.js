var sum = 0
for(i =0 ; sum<100 ; i++){
    var num =prompt("Enter Your Number")
    if(num == 0 || num >100){
        break
    } 
    num = parseInt(num)
    sum+=num
    console.log(sum)
}
document.writeln(`<h1>The sum is <mark>${sum}</mark> </h1>`)
