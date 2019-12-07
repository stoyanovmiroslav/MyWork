// import kinvey from '../kinvey'

// let userService = (() => {
//     function isAuth() {
//         return sessionStorage.getItem('authtoken') !== null;
//     }

//     function saveSession(userData) {
//         sessionStorage.setItem('authtoken', userData._kmd.authtoken);
//         sessionStorage.setItem('username', userData.username);
//         sessionStorage.setItem('userId', userData._id);
//     }

//     function register (username, password) {
//         let obj = { username, password };

//         return kinvey.post('user', '', 'basic', obj);
//     }

//     function login(username, password) {
//         let obj = { username, password };

//         return kinvey.post('user', 'login', 'basic', obj)
//     }

//     function logout() {
//         return kinvey.post('user', '_logout', 'kinvey');
//     }

//     return {
//         isAuth,
//         login,
//         logout,  
//         register,
//         saveSession
//     }
// })();

// export default userService