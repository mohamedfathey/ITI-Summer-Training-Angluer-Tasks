var i1Ques = prompt("do you fly ? answer Y or N");
if (i1Ques.toLowerCase() == 'y') {
    var i2Ques = prompt("Are You Wild ? answer y or n");
    if (i2Ques.toLowerCase() == 'y') {
        showImage("img/eagle.jpg");
    } else {
        showImage("img/parrot.jpg");
    }
} else if (i1Ques.toLowerCase() == 'n') {
    var i3Ques = prompt("Do you live under sea ? answer y or n");
    if (i3Ques.toLowerCase() == 'y') {
        var i4Ques = prompt("Are you Wild ? answer y or n");
        if (i4Ques.toLowerCase() == 'y') {
            showImage("img/shark.jpg");
        } else if (i4Ques.toLowerCase() == 'n') {
            showImage("img/dolphin.jpg");
        }
    } else if (i3Ques.toLowerCase() == 'n') {
        var i5Ques = prompt("Are You Wild ? answer y or n");
        if (i5Ques.toLowerCase() == 'y') {
            showImage("img/lion.jpg");
        } else if (i5Ques.toLowerCase() == 'n') {
            showImage("img/cat.jpg");
        }
    }
}

function showImage(imageName) {
    var img = document.createElement("img");
    img.src = imageName;
    document.body.appendChild(img);
}
