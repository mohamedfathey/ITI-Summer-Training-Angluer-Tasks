document.getElementById('btn').addEventListener('click', function() {
    const name = document.getElementById('userName').value;
    const age = document.getElementById('age').value;
    const genderElements = document.getElementsByName('gender');
    let gender, genderImage;
    
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            genderImage = gender === 'Male' ? '1.jpg' : '2.jpg';
            break;
        }
    }
    
    const color = document.getElementById('select').value;
    window.location.href = `result.html?name=${name}&age=${age}&gender=${gender}&color=${color}&genderImage=${genderImage}`;
});