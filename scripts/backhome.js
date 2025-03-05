let backToLogin = document.getElementById('backHome');
backToLogin.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
    // window.history.back();
    // alert('Back to Home');
});