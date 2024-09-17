function loginUp() {
    let loginForm = document.getElementById('login-form-container');
    let form_container = document.getElementById('form-container');
    loginForm.style.bottom = '20%'
    loginForm.style.borderRadius = '.4rem';
    document.getElementById('signup-form').style.pointerEvents = 'None';
    document.getElementById('login-form').style.pointerEvents = 'All';
    form_container.style.backgroundColor = '#ffffff'

}

function loginDown() {
    let loginForm = document.getElementById('login-form-container');
    let form_container = document.getElementById('form-container');


    form_container.style.backgroundColor = '#3586f1'
    loginForm.style.bottom = '-48%'
    loginForm.style.borderRadius = '50%'
    document.getElementById('signup-form').style.pointerEvents = 'All';
    document.getElementById('login-form').style.pointerEvents = 'None';
}