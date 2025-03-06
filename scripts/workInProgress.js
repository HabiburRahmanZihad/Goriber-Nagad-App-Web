let paymentCards = document.getElementById('payments-card');
let othersCard = document.getElementById('others-card');

paymentCards.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
        alert('Developer Says: Work in Progress');
    }
});

othersCard.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
        alert('Developer Says: Work in Progress');
    }
});