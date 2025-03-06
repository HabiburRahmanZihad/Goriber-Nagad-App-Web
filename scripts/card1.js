let sendMoneyButton = document.getElementById('sendMoney-Confirm-btn');
sendMoneyButton.addEventListener('click', function (event) {
    event.preventDefault();

    let number = document.getInputValueById('mobileNumber');
    console.log(number);
    console.log(typeof number);
    // let numberLength = number.value.length;


    let amount = document.getElementById('amount');
    let convertAmount = parseInt(amount.value);


    let pin = document.getElementById('pin-input');
    let convertPin = parseInt(pin.value);



    // let convertTaka = parseInt(taka.innerText);
    // console.log(convertTaka);
    // console.log(typeof convertTaka);

    // let totalAmount = convertAmount + convertTaka;




    // if (numberLength === 11) {
    //     if (convertAmount > 0) {
    //         if (convertPin === 1234) {
    //             alert('Money sent successfully');
    //             window.location.href = 'dashboard.html';
    //         }
    //         else {
    //             alert('Please enter a valid pin');
    //         }
    //     }
    //     else {
    //         alert('Please enter a valid amount');
    //     }
    // }
    // else {
    //     alert('Please enter a valid mobile number');
    // }

    // number.value = '';
    // amount.value = '';
    // pin.value = '';
});


