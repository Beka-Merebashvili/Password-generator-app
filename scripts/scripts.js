const passwordLength = document.getElementById('password-length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const password = document.getElementById('password');
const passdLength = document.getElementById('length')

function generetePaswword() {
    let setPassword = "" ;
    if(uppercase.checked){
        setPassword += "ABCDEFGHIJKLMNOPQRSTUVXZYZ" ;
    }
    if(lowercase.checked){
        setPassword += "abcdegghijklmnopqrstuvwxyz" ;
    }
    if(numbers.checked){
        setPassword += "0123456789"
    }
    if(symbols.checked){
        setPassword += "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
    }

    let generatedPassword = ''

    for (let i = 0 ; i < passwordLength.value ; i++ ){
        let randomIndex = Math.floor(Math.random()*setPassword.length);
        generatedPassword += setPassword[randomIndex];
    }
    if(uppercase.checked || lowercase.checked || numbers.checked || symbols.checked){
        password.textContent = generatedPassword ;
    } else {
        password.textContent = ''
    }
    
    passdLength.textContent = passwordLength.value;
}