/* eslint-disable require-jsdoc */
const apiUrl =
    "http://localhost:3000/api/user/a@a.com";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    const data = await response.json();
    console.log(data);
    if (response) {
        document.getElementById('app').innerHTML = data.message.email
    }
}
localStorage.setItem('isLogin', false)
const isLogin = localStorage.getItem('isLogin')
console.log(isLogin, typeof isLogin)
if (isLogin === "true") {
    getapi(apiUrl);
}