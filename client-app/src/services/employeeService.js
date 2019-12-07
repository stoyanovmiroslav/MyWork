import kinvey from '../kinvey'

let employeeService = (() => {
    let entity = 'event';

    function create(name, position, manager, phone) {
        const data = {name, position, manager, phone};

        const endpoint = `${entity}`;

        return kinvey.post('appdata', endpoint, 'kinvey', data);
    }

    function getAll() {
        const data = {};

        const endpoint = `${entity}?query={}`;
        //const endpoint = `${entity}?query={}&sort={"peopleInterestedIn": -1}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
    }

    function deleteById(id) {
        const data = {};

        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}", "_id":"${id}"}`;

        return kinvey.remove('appdata', endpoint, 'kinvey', data);
    }

    return {
        create,
        getAll,
        deleteById
    }
})();


export default employeeService