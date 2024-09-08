function fizzORbuzz() {
    var number = document.getElementById("number").value;
    var output = document.getElementById("output");
    output.innerHTML = '';

    if (number % 5 == 0 && number % 3 == 0) {
        addLabel(output, "fizz and buzz");
        console.log("sout");
    } else if (number % 3 == 0) {
        addLabel(output, "fizz");
    } else if (number % 5 == 0) {
        addLabel(output, "buzz");
    } else {
        addLabel(output, "none");
    }
    

}

function addLabel(element, text) {
    var label = document.createElement('div');
    label.className = 'text-label';
    label.innerText = text;
    element.appendChild(label);

}