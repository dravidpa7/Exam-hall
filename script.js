function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (username === "admin" && password === "1234") {
        window.location.href="exam_input_page.html";
    } else {
        errorMessage.textContent = "";
        alert("wrong password!");
    }
}