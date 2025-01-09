const passWordInput = document.querySelector('#input-password');
const btnStatePassword = document.querySelector('.btn-hide-show');




btnStatePassword.addEventListener('click', () => {
    if (passWordInput.type === 'password') {
        passWordInput.type = 'text';
        document.querySelector('#show-password').style.display = 'block';
        document.querySelector('#hide-password').style.display = 'none';

    } else{
        passWordInput.type = 'password';
        document.querySelector('#hide-password').style.display = 'block';
        document.querySelector('#show-password').style.display = 'none';
    }
});


