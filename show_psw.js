// For from show password toggle Register
$('#togglePassword').on('click', function () {
    const passwordField = $('#password');
    const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    $(this).find('i').toggleClass('fa-eye fa-eye-slash');
});

$('#togglePassword-1').on('click', function () {
    const passwordField = $('#comfirmpassword');
    const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    $(this).find('i').toggleClass('fa-eye fa-eye-slash');
});