import Home from '../views/home.js'
import login from '../views/login.js'
import singup from '../views/singup.js'

let content = document.getElementById('root');

export const router = (route) => {

    content.innerHTML = '';

    switch (route) {
        case '#/':{
            return content.appendChild(Home());
        }
        case '#/login':
            return content.appendChild(login());
        case '#/sing-up':
            return content.appendChild(singup());
        default:
            return console.log('404!!!')

    }

}