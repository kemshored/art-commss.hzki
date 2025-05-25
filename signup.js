document.addEventListener("DOMContentLoaded", function() {
  const password1Input = document.getElementById("password1");
  const password2Input = document.getElementById("password2");
  const signup = document.getElementById("signup");
  const messageLabel = document.getElementById("messageLabel");
  const agreeTermsCheckbox = document.getElementById("agreeTerms");

  function checkPasswords() {
      const password1 = password1Input.value;
      const password2 = password2Input.value;
      const passwordMatch = password1 === password2 && password1 !== "" && password2 !== "";

      signup.disabled = !passwordMatch;

      if (passwordMatch) {
          messageLabel.textContent = "Passwords Match";
          messageLabel.style.color = "green";
      } else {
          messageLabel.textContent = "Passwords Do Not Match";
          messageLabel.style.color = "red";
      }
  }

  password1Input.addEventListener("input", checkPasswords);
  password2Input.addEventListener("input", checkPasswords);

  // Handle signup button click
  signup.addEventListener("click", function() {
      const username = document.getElementById("username").value;
      const password = password1Input.value;

      // Check if terms are agreed
      if (!agreeTermsCheckbox.checked) {
          alert("You must agree to the terms and conditions before signing up.");
          return;
      }

      // Save user data to local storage
      const userData = {
          username: username,
          password: password
      };
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('loggedIn', 'true');

      alert("Happy shopping! You are now signed up.");

      // Redirect to homepage
      window.location.href = "homepage.html";
  });
});

