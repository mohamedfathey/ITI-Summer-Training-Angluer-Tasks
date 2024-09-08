var btn = document.getElementById("btn");
btn.onclick = function() {
    let win = open("", "", "width=200,height=100");
    let x = 10, y = 20;
    var set = setInterval(function() {
        win.moveBy(x, y);
        if (win.screenY>=632) {
            y = -y; 
        }
        if(win.screenX>=299){
            x= -x;
        }
        btn.onmouseenter=function(){
            clearInterval(set);
        }
    }, 200);
};