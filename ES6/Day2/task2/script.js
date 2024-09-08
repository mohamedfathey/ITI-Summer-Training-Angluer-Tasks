const tbl = document.getElementById("table");
const cont = document.getElementById("buttonContainer");

async function execute() {
    let response = await fetch("http://localhost:9292/employee/");
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const row = `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].salary}</td>
            
        </tr>
        `;
        tbl.insertAdjacentHTML("beforeend", row);
    }

    // for (let i = 0; i < data.length; i++) {
    //     const button = document.createElement('button');
    //     button.textContent = data[i].name;
    //     button.style.width = '200px';
    //     button.style.height = '30px';
    //     button.style.margin = '20px';
    //     cont.appendChild(button);
    // }
}

execute();
