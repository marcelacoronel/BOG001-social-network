import Home from '../views/home.js';
import login from '../views/login.js';
import signup from '../views/signup.js';
import error from '../views/404.js';
import dashboard from '../views/dashboard.js';
import profile from '../views/profile.js';

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
    case '#/dashboard':
      return content.appendChild(dashboard());
    case '#/profile':
      return content.appendChild(profile());
    default:
      return content.appendChild(error());
  }
};
