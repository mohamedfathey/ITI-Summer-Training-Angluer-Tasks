
function isPalindrome(str, caseSensitive) {
    if (!caseSensitive) {
        str = str.toLowerCase();
    }

    return str === str.split('').reverse().join('');
}

var input = prompt("Enter a string to checkpalindrome:");
var caseSensitive = confirm("Do you want case sensitivity?");

if (input !== null) {
    var result = isPalindrome(input, caseSensitive);
    if (result) {
        document.writeln(`<h1>"${input}" is a palindrome.</h1>`);
    } else {
        document.writeln(`<h1>"${input}" is not a palindrome.</h1>`);
    }
}
