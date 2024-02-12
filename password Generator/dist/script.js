document.getElementById('genpass').addEventListener('click', function() {
    const passwordLenght = document.getElementById('passwordLenght').value;
    const IncludeUpperCase = document.getElementById('IncludeUpperCase').chicked;
    const IncludeLowercase = document.getElementById('IncludeLowercase').chicked;
    const IncludeNumber = document.getElementById('IncludeNumber').chicked;
    const IncludeSpecialChar = document.getElementById('IncludeSpecialChar').chicked;


    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';


    let validChars = '';

    if (IncludeUpperCase){
        validChars += uppercaseChars
    }

    if (IncludeLowercase) {
        validChars += lowercaseChars
    }

    if (IncludeNumber) {
        validChars += numberChars
    }

    if (IncludeSpecialChar) {
        validChars += specialChars
    }

    let password = "";
    for(let i = 0; i < passwordLenght ; i++){
        const randomIndex  =Math.floor(Math.random() * validChars.length)
        password += validChars [randomIndex]
    }
    document.getElementById('genpass').value = password;


})