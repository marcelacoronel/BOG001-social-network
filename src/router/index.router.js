import Home from '../views/home.js'
import login from '../views/login.js'
import singup from '../views/singup.js'
import error from '../views/404.js'

let content = document.getElementById('root');

export const router = (route) => {

    content.innerHTML = '';

    switch (route) {
        case '':{
            return content.appendChild(Home());
        }
        case '#/login':
            return content.appendChild(login());
        case '#/sign-up':
            return content.appendChild(singup());
        default:
            return content.appendChild(error());

    }

}