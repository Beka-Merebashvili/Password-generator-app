const passwordLength = document.getElementById('password-length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const password = document.getElementById('password');
const passdLength = document.getElementById('length');
const checkbox =[...document.getElementsByClassName('checkbox-input')] 
const level = document.getElementById('level');
const colorBox = document.getElementsByClassName('color-box');
// const line = document.getElementById('line');
const copy = document.getElementById('copy');
const copied = document.getElementById('copyed');

copy.addEventListener('click', () => {
  const textToCopy = password.textContent ;
  const tempInput = document.createElement('input');
  tempInput.setAttribute('value', textToCopy);
  document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    copied.style.display = 'block';
    setTimeout(function(){
        copied.style.display = "none";
      }, 2000);
});

 

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
    
}

passwordLength.addEventListener("input" , () => {
    passdLength.textContent = passwordLength.value;
}) ;


let setCounter = 0 ;

 checkbox.forEach((x)=>{
    x.addEventListener('click' , () => {
        if (x.checked) {
            setCounter += 1
            x.style.backgroundColor = '#A4FFAF';
            x.style.backgroundImage = "url('../starter-code/assets/images/icon-check.svg')" ;
        }
        else {
            setCounter -= 1
            x.style.background = '';
        }
        if(setCounter == 0) {
            level.textContent = ""
            colorBox[0].classList.remove('for-tooweak');
        }
        if (setCounter == 1){
            level.textContent = "TOO WEAK!"
            colorBox[0].classList.add('for-tooweak');
            colorBox[0].classList.remove('for-weak');
            colorBox[1].classList.remove('for-weak');
        }
        if (setCounter == 2) {
            level.textContent = "WEAK"
            colorBox[0].classList.add('for-weak');
            colorBox[1].classList.add('for-weak');
            colorBox[0].classList.remove('for-medium');
            colorBox[1].classList.remove('for-medium');
            colorBox[2].classList.remove('for-medium');
        }
        if (setCounter == 3) {
            level.textContent = "MEDIUM"
            colorBox[0].classList.add('for-medium');
            colorBox[1].classList.add('for-medium');
            colorBox[2].classList.add('for-medium');
            colorBox[0].classList.remove('for-strong');
            colorBox[1].classList.remove('for-strong');
            colorBox[2].classList.remove('for-strong');
            colorBox[3].classList.remove('for-strong');
        }
        if (setCounter == 4) {
            level.textContent = "STRONG"
            colorBox[0].classList.add('for-strong');
            colorBox[1].classList.add('for-strong');
            colorBox[2].classList.add('for-strong');
            colorBox[3].classList.add('for-strong');
        }
    })
    
 })