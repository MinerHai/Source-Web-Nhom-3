document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.getElementById('password');
    const buttonLogin = document.getElementById('login');
    const alertLogin = document.getElementById('alert_login');
    const alertLoginEmail = document.getElementById('alert_login_email');
    var email =   document.getElementById('email')
    var register =   document.getElementById('register')
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye icon (optional)
        this.classList.toggle('visible');
    });
    
    buttonLogin.addEventListener('click', function() {
        if(!validateEmail(email.value)){
            alertLogin.style.display = 'none'
            alertLoginEmail.style.display = 'block';
            return;
        }
    if(passwordField.value === '123456789' && email.value ==='phamthithuylinh1912@gmail.com'){
        alertLogin.style.display = 'none'
        alertLoginEmail.style.display = 'none';
        window.location.href = 'homepage.html';
    }
    else{
        alertLoginEmail.style.display = 'none';
        alertLogin.style.display = 'block'
    }
    });

    register.addEventListener('click', function() {
    window.location.href = 'signin.html';
    });
});