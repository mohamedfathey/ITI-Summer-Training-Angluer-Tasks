function AddCircle(){
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    const colorInput = document.getElementById("changeColor");
    colorInput.onchange = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = colorInput.value; 
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.strokeStyle = color; 
    context.stroke(); 
}
