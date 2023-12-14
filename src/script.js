function toggleLogin() {
    const toggleLoginType = document.getElementById('toggle-login-type')
    const sectionLoginDefault = document.getElementById('section-login-default')
    const sectionLoginVoucher = document.getElementById('section-login-voucher')

    toggleLoginType.className =
        toggleLoginType.className === 'type-login-voucher'
            ? 'type-login-default'
            : 'type-login-voucher'

    if(toggleLoginType.className === 'type-login-voucher') {
        toggleLoginType.textContent = 'Área de colaboradores'

        sectionLoginDefault.style.height = '0'
        sectionLoginVoucher.style.height = '100%'

        return
    }

    toggleLoginType.textContent = 'Área de visitantes'

    sectionLoginDefault.style.height = '100%'
    sectionLoginVoucher.style.height = '0'
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input')
    const passwordEye = document.querySelector('.password-eye')

    passwordEye.classList.toggle('hidden')

    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'

        return
    }

    passwordInput.type = 'password'
  }