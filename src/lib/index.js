export const validateEmailAndPass = (email, password) => {
  let warningAuth = '';
  const valEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const authMessage = document.getElementById('messagePass');
  // VALIDAR EMAIL
  if (!valEmail.test(email)) {
    warningAuth += 'Email no válido -   ';
    authMessage.innerHTML = warningAuth;
    return false;
  }
  // VALIDAR CONSTRASEÑA
  const valPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (!valPass.test(password)) {
    warningAuth += '  Contraseña es incorrecta';
    authMessage.innerHTML = warningAuth;
    // return (enterLogin = false);
  }
  return true;
};
