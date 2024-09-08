function changeColor (){
    var btn =document.getElementById("number").value;

    var div1 = document.getElementById("red");
    var div2 = document.getElementById("yellow");
    var div3 = document.getElementById("green");

    if(btn == 1){
        div1.style.backgroundColor="red";
        div2.style.backgroundColor = "lightgray";
        div3.style.backgroundColor = "lightgray";
        // addLabel(div1, "Ready",red);
    }
    else if(btn == 2){
        div2.style.backgroundColor="yellow";
        div1.style.backgroundColor = "lightgray";
        div3.style.backgroundColor = "lightgray";
        // addLabel(div2, "staedy",yellow);
    }else if (btn==3){
        div3.style.backgroundColor="green";
        div2.style.backgroundColor = "lightgray";  
        div1.style.backgroundColor = "lightgray";
        // addLabel(div3, "Go",green);
    }
    else{
        div1.style.backgroundColor = "lightgray";
        div2.style.backgroundColor = "lightgray";
        div3.style.backgroundColor = "lightgray"
        alert("Please enter a valid number (1, 2, or 3).");
    }
    // function addLabel(element, text,color) {
    //     var label = document.createElement('div');
    //     label.className = 'text-label';
    //     label.innerText = text;
    //     element.appendChild(label);
    //     label.style.color =color;

    
    
}



// var ele = document.createElement("div");
// // createTextNode

// ele.innerText = "Div";
// ele.style.color = "teal"
// document.body.appendChild(ele)