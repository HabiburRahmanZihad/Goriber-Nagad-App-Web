let sendMoneyCard = document.getElementById('send-Money-card');
sendMoneyCard.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'sendMoney.html';
});