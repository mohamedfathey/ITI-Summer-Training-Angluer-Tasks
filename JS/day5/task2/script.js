function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        age: params.get('age'),
        gender: params.get('gender'),
        color: params.get('color'),
        genderImage: params.get('genderImage')
    };
}

function updateReloadCount() {
    let count = sessionStorage.getItem('reloadCount') || 0;
    count++;
    sessionStorage.setItem('reloadCount', count);
    return count;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const params = getQueryParams();
    const color = params.color;

    document.getElementById('genderImage').src = params.genderImage;

    document.getElementById('name').innerText = `Welcome MR  ${params.name}`;
    document.getElementById('name').style.color = color;

    document.getElementById('age').innerText = `Your Age is ${params.age}`;
    document.getElementById('age').style.color = color;

    const reloadCount = updateReloadCount();

    document.getElementById('reloadCount').innerText = `You reloaded ${reloadCount} times`;
    document.getElementById('reloadCount').style.color = color;
});