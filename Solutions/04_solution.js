// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password) {
    if (password.length < 8) {
        return false
    }
    let hasUpperCase = /[A-Z]/.test(password)

    let hasLowerCase = /[a-z]/.test(password)

    let hasDigit = /[0-9]/.test(password)

    return hasUpperCase && hasLowerCase && hasDigit
}
console.log(validatePassword("pass"))
console.log(validatePassword("sahil123"))
console.log(validatePassword("Sahil0123"))