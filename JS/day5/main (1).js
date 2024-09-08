// /**
//  * 
//  * Ajax
//  * Cookies
//  * error handling (try..catch..finally)
//  * 
//  */

// //----------------------------------------------


// //synchronous code 

// // const p = document.getElementById("p1");
// // alert("Hello");
// // p.style.color= "red"

// //-----------------------------------------------


// // const p = document.getElementById("p1");

// // // asynchronous code
// // setTimeout(function(){
// //     p.innerHTML = "My name is mona";
// // },3000)

// // p.style.color = "red";
// //
// //
// //


// //-----------------------------------


// //ajax : asynchrous javascript and xml


// /**
//  *                   send request
//  * Client (Browser)  -------------> web server
//  * 
//  *                   <-------------
//  *                     response         
//  * 
//  * 
//  * get : get data from server
//  * 
//  * post : send data to server  
//  * 
//  * 
//  */


// // web api : application program interface


// //-------------------------------------


// /**
//  * 
//  * var employee = {
//  *  id:1,
//  *  name:"ali",
//  *  salary: 3000
//  * }
//  * 
//  * 
//  * <employee>
//  *      <id>1</id>
//  *      <name>ali</name>
//  *      <salary>3000</salary>
//  * </employee>
//  * 
//  */


// // json


// // var employee = {
// //     id :1,
// //     name :"ali",
// //     salary:3000,
// //     showSalary(){
// //         console.log(this.salary);
// //     }
// // }

// // var jsonObj = JSON.stringify(employee);
// // console.log(jsonObj);



// /**
//  * 
//  * var employee = {
//  *  id:1,
//  *  name:"ali",
//  *  salary: 3000
//  * }
//  * 
//  * 
//  * //json obj
//  * 
//  * "{
//  *      "id":1,
//  *      "name": "ali",
//  *      "salary" : 3000
//  *  
//  * 
//  * }"
//  * 
//  * 
//  */

// //-----------------------------------------


// //1- Create request 
// const tbl = document.getElementById("tbl");


// // data.name.common
// // data.startOfWeek
// //data.capital[0]
// //data.laguages.fra

// // const request = new XMLHttpRequest();

// // // define request type and url
// // request.open("get","https://restcountries.com/v3.1/all")

// // request.send();

// // request.addEventListener("load",function(){
// //     // console.log(request.responseText);
// //     const data = JSON.parse(request.responseText)[0];
// //     // console.log(data);
// //     const row = 
// //     `
// //         <tr>
// //             <td>${data.name.common}</td>
// //             <td>${data.capital[0]}</td>
// //             <td>${data.languages.fra}</td>
// //             <td>${data.startOfWeek}</td>
        
// //         </tr>
// //     `

// //     tbl.insertAdjacentHTML("beforeend",row)
// // })



// // -----------------------------------------

// //search by name 



// // const request = new XMLHttpRequest();

// // // define request type and url
// // request.open("get","https://restcountries.com/v3.1/name/egypt")

// // request.send();

// // request.addEventListener("load",function(){
// //     // console.log(request.responseText);
// //     const data = JSON.parse(request.responseText)[0];
// //     console.log(data);
// //     const row = 
// //     `
// //         <tr>
// //             <td>${data.name.common}</td>
// //             <td>${data.capital[0]}</td>
// //             <td>${data.startOfWeek}</td>
        
// //         </tr>
// //     `

// //     tbl.insertAdjacentHTML("beforeend",row)
// // })


// // ----------------------------------------

// // search by name using function


// // function getCountryData(countryName){
// //     const request = new XMLHttpRequest();

// // // define request type and url
// // request.open("get",`https://restcountries.com/v3.1/name/${countryName}`)

// // request.send();

// // request.addEventListener("load",function(){
// //     // console.log(request.responseText);
// //     const data = JSON.parse(request.responseText)[0];
// //     console.log(data);
// //     const row = 
// //     `
// //         <tr>
// //             <td>${data.name.common}</td>
// //             <td>${data.capital[0]}</td>
// //             <td>${data.startOfWeek}</td>
        
// //         </tr>
// //     `

// //     tbl.insertAdjacentHTML("beforeend",row)
// // })
// // }

// // getCountryData("usa")
// // getCountryData("egypt")
// // getCountryData("portugal")


// // -----------------------------------------------

// // Cookies 



// /**
//  * 
//  *  1- session cookie
//  * 
//  *  2- presistent cookie : expiration date
//  * 
//  */


// // get all cookies
// // console.log(document.cookie);
// // 
// // set cookie 
// //session cookie
// document.cookie = "favColor=red"

// // console.log(document.cookie);

// // let date = new Date(2024,6,25);

// // console.log(date);
// //presistant cookie


// // let date = new Date();
// // date.setDate(date.getDate() +5);
// // document.cookie = "username=ali;expires="+date;



// // //-------------------------------------------

// // function getAllCookies(){
// //     return document.cookie;
// // }

// // // var cookies = getAllCookies();
// // // console.log(cookies);

// // function saveSessionCookie(key,value){
// //     document.cookie = `${key}=${value}`
// // }


// // function savePresistantCookie(key,value,date){
// //     document.cookie = `${key}=${value};expires=${date}`;
// // }

// // function getCookie(key){
// //      return document.cookie.split(";")[1].split("=")[1];
// // }

// // getCookie();

// // function removeCookie(key){
// //     let oldDate = new Date();
// //     oldDate.setDate(oldDate.getDate() -1);

// //     document.cookie = `${key}=;expires=${oldDate}`;

// // }

// // removeCookie("username");


// // -------------------------------------


// // error handling (try catch)



// // let x = 5;
// // const y = 3;
// // y = 4; //error

// // console.log(x);
// // console.log(y);


// // try{ 
// //     var x = 5;
// //     const y = 3;
// //     y = 4; //error
// //     console.log(x);
// //     //
// //     //
// //     //


// // }catch(e){
// //     console.log("error: "+ e.message);
// // }


// // console.log(x);
// //
// //
// //
// //
// //

// //------------------------------------


// // try{ 
// //     var x = 5;
// //     const y = 3;
// //     console.log(x);
// //     //
// //     //
// //     //


// // }catch(e){
// //     console.log("error: "+ e.message);
// // }
// // finally{

// //     console.log(x);
// // console.log(x);
// // console.log(x);
// // console.log(x);
// // }


// // console.log(x);
// // console.log(x);
// // console.log(x);
// // console.log(x);



// //----------------------------------


// function divide (x,y)
// {
//     if(y===0){
//         throw new Error("Division by 0 is not allowed")
//     }
//     return x/y;
// }


// try{
//     divide(6,0)
// }
// catch(e){
//     console.log(e.message);
// }

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");













