function login(event) {
    // Prevent the default form submission (which would refresh the page)
    event.preventDefault();
    
    // Get the input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Log the values or perform any action
    console.log("Email: ", email, "Password: ", password);
}