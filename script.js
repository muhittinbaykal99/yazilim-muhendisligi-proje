const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.onsubmit = function(event) {
        event.preventDefault(); // Formun varsayılan gönderim işlemini engeller

        // Form verilerini toplama
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const remember = document.querySelector('input[name="remember"]').checked;

        // Form verilerini kullanma
        console.log(`Email: ${email}, Password: ${password}, Remember me: ${remember}`);
        window.location.href = '/projedevami/index.html'
    };
});
