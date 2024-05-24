document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.getElementById('toggle_password');
    const toggleConfirmPassword = document.getElementById('toggle_confirm_password');
    const passwordField = document.getElementById('password_regis');
    const passwordConfirmField = document.getElementById('confirm_password_regis');
     const alertRegisEmail = document.getElementById('alert_register_email');
     const alertRegisPass = document.getElementById('alert_register_pass');
     const alertRegisPassLenght = document.getElementById('alert_register_pass_lenght');
     const email =  document.getElementById('email_regis');
     const registerBtn = document.getElementById('btn_regis');
     const login =   document.getElementById('btn_login_regis')
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

    toggleConfirmPassword.addEventListener('click', function() {
        const type = passwordConfirmField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordConfirmField.setAttribute('type', type);

        // Toggle the eye icon (optional)
        this.classList.toggle('visible');
    });
    
    registerBtn.addEventListener('click', function() {
        if(!validateEmail(email.value)){
            alertRegisPass.style.display = 'none';
            alertRegisPassLenght.style.display = 'none';
            alertRegisEmail.style.display = 'block';
            return;
        }
        debugger
        if(passwordField.value.length <8){
            alertRegisEmail.style.display = 'none';
            alertRegisPass.style.display = 'none';
            alertRegisPassLenght.style.display = 'block';
            return
        }
        if(passwordField.value !=passwordConfirmField.value){
            alertRegisEmail.style.display = 'none';
            alertRegisPassLenght.style.display = 'none';
            alertRegisPass.style.display = 'block';
            return;
        }
        alertRegisEmail.style.display = 'none';
        alertRegisPass.style.display = 'none';
        alertRegisPassLenght.style.display = 'none';
        alert('Thông tin đăng ký thành công');
    });

    login.addEventListener('click', function() {
    window.location.href = 'login.html';
    });
});