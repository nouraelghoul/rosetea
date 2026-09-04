
document.getElementById("signin").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("namee").value;
    let pass = document.getElementById("pass").value;

    let sName = localStorage.getItem("name");
    let sPassword = localStorage.getItem("password");

    if (name === sName && pass === sPassword) {

        console.log("Sign in successful");
localStorage.setItem("login", "logged") ; //stored value
        window.location.href = "index4.html";

    } else {

        alert("incorrect!");

    }

});