function toggleLogin() {
    const toggleLoginType = document.getElementById('toggle-login-type')
    const iconToggleLoginType = document.getElementById('arrow-icon')
    const logoIcon = document.getElementById('logo-icon')

    const sectionLoginDefault = document.getElementById('section-login-default')
    const sectionLoginVoucher = document.getElementById('section-login-voucher')

    logoIcon.classList.toggle('slide-left')

    toggleLoginType.className =
        toggleLoginType.className === 'type-login-voucher'
            ? 'type-login-default'
            : 'type-login-voucher'

    if(toggleLoginType.className === 'type-login-voucher') {
        toggleLoginType.textContent = 'Área de colaboradores'
        toggleLoginType.appendChild(iconToggleLoginType)

        sectionLoginDefault.style.height = '0'
        sectionLoginVoucher.style.height = '10.625em'

        return
    }

    toggleLoginType.textContent = 'Área de visitantes'
    toggleLoginType.appendChild(iconToggleLoginType)

    sectionLoginDefault.style.height = '16.563em'
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