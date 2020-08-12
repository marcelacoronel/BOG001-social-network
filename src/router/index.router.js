import Home from '../views/home.js';
import login from '../views/login.js';
import signup from '../views/signup.js';
import error from '../views/404.js';

const content = document.getElementById('root');

export const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '': {
      return content.appendChild(Home());
    }
    case '#/login':
      return content.appendChild(login());
    case '#/sign-up':
      return content.appendChild(signup());
    default:
      return content.appendChild(error());
  }
};
