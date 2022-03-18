const checklogin = () => {
    let emailValue = document.getElementById('email').value
    let passwordValue = document.getElementById('password').value

    if (emailValue === 'boss.armsport@gmail.com' && passwordValue === '18') {
        alert('Вы авторизовались')

        let user = {
            email: emailValue,
            password: passwordValue
        }

        localStorage.setItem('userValue', JSON.stringify(user))

        initLogin();
    } else {
        alert('Неправильно ввели логин или пароль')
    }
}

const renderBlock = () => {
    let email = document.createElement('input')
    email.id = 'email'

    let password = document.createElement('input')
    password.id = 'password'

    let emailLable = document.createElement('lable')
    let passwordLable = document.createElement('lable')

    emailLable.innerHTML = 'Введите Email'
    passwordLable.innerHTML = 'Введите Password'

    let button = document.createElement('button')
    button.innerHTML = 'Войти'
    button.addEventListener('click', checklogin)

    document.body.append(emailLable)
    document.body.append(document.createElement('br'))
    document.body.append(email)
    document.body.append(document.createElement('br'))
    document.body.append(passwordLable)
    document.body.append(document.createElement('br'))
    document.body.append(password)
    document.body.append(document.createElement('br'))
    document.body.append(button)
};

const initLogin = () => {
    localStorage.getItem('userValue')
        ? (document.body.innerHTML = "Welcome Elkhan")
        : renderBlock();
}

renderBlock();
