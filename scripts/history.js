let historyButton = document.getElementById('transaction-history-btn');
historyButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'history.html';
});