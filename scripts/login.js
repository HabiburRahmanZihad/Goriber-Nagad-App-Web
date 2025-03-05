let loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();


    const number = document.getElementById('number').value;

    const pin = getInputValueById('pin');


    if (number.length === 11) {
        if (pin === 1234) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid Pin');
        }
    } else {
        alert('Invalid Number');
    }
});

let forgetPin = document.getElementById('forgotPin');
forgetPin.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'registration.html';
});


