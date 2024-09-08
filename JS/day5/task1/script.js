

// const request = new XMLHttpRequest();
// request.open("get","https://restcountries.com/v3.1/all")
// request.send();
// const tbl = document.getElementById("table");
// request.addEventListener("load",function(){

//     const data = JSON.parse(request.responseText)[0];
//     console.log(data);
//     const row = 
//     `
//         <tr>
//             <td>${data.name.common}</td>
//             <td>${data.tld}</td>
//             <td>${data.startOfWeek}</td>  
//         </tr>
//     `
//     // <td>${data.urd.official[0]}</td>      
//     tbl.insertAdjacentHTML("beforeend",row)
// })
const tbl = document.getElementById("table");

function getData (countryName){
    const request = new XMLHttpRequest();
    request.open("get" ,`https://restcountries.com/v3.1/name/${countryName} `);
    request.send();
    request.addEventListener("load",function(){
        const data = JSON.parse(request.responseText)[0];
        const row = 
        `
        <tr>
            <td>${data.name.common}</td>
            <td>${data.tld}</td>
            <td>${data.translations.ara.official}</td>
            <td>${data.startOfWeek}</td
        </tr>
        `
        tbl.insertAdjacentHTML("beforeend",row)

    })
}
getData("egypt")
getData("usa")
getData("Luxembourg")



