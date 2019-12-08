import kinvey from '../kinvey'

let userService = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken);
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('userId', userData._id);
    }

    function getCompanyData(userData) {
        const data = {};
        let userId = sessionStorage.getItem('userId');
        const endpoint = `?query={"_id":"${userId}"}`;

        return kinvey.get('user', endpoint, 'kinvey', data);
     }

    function register (username, password, companyName) {
        let obj = { username, password, companyName };

        return kinvey.post('user', '', 'basic', obj);
    }

    function login(username, password) {
        let obj = { username, password };

        return kinvey.post('user', 'login', 'basic', obj)
    }

    function logout() {
        return kinvey.post('user', '_logout', 'kinvey');
    }

    return {
        isAuth,
        login,
        logout,
        register,
        saveSession,
        getCompanyData
    }
})();

export default userService

// import config from '../config.js'
// import Cookies from 'js-cookie'

// const userService = {
//   register: function (data) {
//     return fetch(`${config.serverUrl}user/register`, {
//       body: JSON.stringify(data),
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       }
//     }).then(res => res.json());
//   },

//   setCookie(cookie){
//     Cookies.set(config.cookie, cookie)
//   },

//   login: function (data) {
//     return fetch(`http://localhost:9999/api/user/login`, {
//       body: JSON.stringify(data),
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       credentials: 'include'
//     }).then(res => res.text());
//   },

//   logout: function () {
//     return fetch(`http://localhost:9999/api/user/logout`, {
//       method: 'POST',
//       credentials: 'include'
//     }).then(res => res.text());
//   }

// };

// export default userService;