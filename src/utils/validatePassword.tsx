const validatePassword = (password: string, repeatPassword: string) => {
    return String(password).length >= 6 && String(password) === String(repeatPassword);
}
    export default validatePassword;
