export const ValidateEmail = (form, setErrors, errors) => {
    if (form.email === '') {
        setErrors({...errors, email:'Email vacio'});
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
            setErrors({...errors, email:''});
        } else {
            setErrors({...errors, email:'Email invalido'});
        }
        if (form.email.length > 35) {
            setErrors({...errors, email:'El email no puede tener más de 35 caracteres'});
        }
    }
}

export const ValidatePassword = (form, setErrors, errors) => {
    if (!form.password) {
            setErrors({...errors, password:'Password vacio'});
    } else {
        if (form.password.length >= 6 && form.password.length <= 10) {
            const pas = form.password.split("");

            const hasNumber = pas.some(num => !isNaN(num));
            if (!hasNumber) {
                setErrors({...errors, password:'La contraseña debe tener almenos un numero'});
            } else {
                setErrors({...errors, password:''});
            }
        } else {
            setErrors({...errors, password:'La contraseña debe tener entre 6 y 10 caracteres'});
        }
    }
}
