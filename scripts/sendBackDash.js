let backToDashboard = document.getElementById('send-back-dash');
backToDashboard.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
});
