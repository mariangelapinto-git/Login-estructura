const passWordInput = document.querySelector('#input-password');

const showPassword = document.querySelector('#show-password');

const hidePassword = document.querySelector('.hide-Pass');

const btnStatePassword = document.querySelector('.btn-hide-show');





btnStatePassword.addEventListener('click', () => {
    if (passWordInput.type === 'password') {
        passWordInput.type = 'text';
        showPassword.style.display = 'block';
        hidePassword.style.display = 'none';

    } else{
        passWordInput.type = 'password';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'block';
    }
});


