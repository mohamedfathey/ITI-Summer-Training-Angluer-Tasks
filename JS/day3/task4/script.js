function AddStudent(){
    var name = document.getElementById("name").value ;
    var age =document.getElementById("age").value ;
    var table = document.getElementById("data").getElementsByTagName('tbody')[0];
    var i = 1 ;
    // if( name.lenght>3 && age>=3 ){

    var newRow= table.insertRow();
        var nId = newRow.insertCell(0);
        var nName = newRow.insertCell(1);
        var nAge = newRow.insertCell(2);
    nId.innerHTML=i;
    nName.innerHTML=name;
    nAge.innerHTML=age;
    i++;
    // }

}

