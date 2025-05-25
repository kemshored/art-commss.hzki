document.addEventListener("DOMContentLoaded", function() {
    const adminForm = document.getElementById("adminLoginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");
    // Add submit event listener to form
    adminForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get entered values
        const username = usernameInput.value;
        const password = passwordInput.value;
 // Check credentials
 if (username === "hzkizns" && password === "nizz2008") {
    // Login successful
    loginMessage.textContent = "Login successful!";
    loginMessage.style.color = "green";
    
    // Store login status
    localStorage.setItem('adminLoggedIn', 'true');
    
    // Redirect to admin dashboard
    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "admin.html";
} else {
    // Login failed
    loginMessage.textContent = "Invalid username or password";
    loginMessage.style.color = "red";
    passwordInput.value = "";
}
});
});
