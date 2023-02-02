const form = document.querySelector('form')
const username = form['Username']
const email = form['Email']
const password = form['Password']
const cfPassword = form['Confirm password']

function showError (input, message) {
    input.className = 'error'
    input.parentNode.querySelector('small').innerText = message
}
function showSuccess (input) {
    input.className = 'success'
    input.parentNode.querySelector('small').innerText = ''
}
function checkPassword (input) {
    if (input.value.length < 6) {
        showError(input, 'Password must be at least 6 characters')
    }
    else showSuccess(input)
}
function checkConfirmPassword (input1, input2) {
    if (input1.value != input2.value) 
        showError (input2, 'Passwords do not match')
    else showSuccess(input2)
}
function checkRequired (arrInput) {
    let isRequired = false;
    arrInput.forEach(input => {
        if (input.value.trim() === '') {
            showError (input, `${input.name} is required`)
            isRequired = true;
        }
    });
    return isRequired;
}
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    if (!checkRequired([username, email, password, cfPassword])) {
        checkPassword(password)
        checkConfirmPassword(password, cfPassword)
    }
})