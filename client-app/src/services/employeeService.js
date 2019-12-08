import kinvey from '../kinvey'

let employeeService = (() => {
    let entity = 'employees';

    function create(name, position, manager, phone) {
        const hireDate = new Date(Date.now()).toLocaleString().split(',')[0]
        const data = {name, position, manager, phone, hireDate};

        const endpoint = `${entity}`;

        return kinvey.post('appdata', endpoint, 'kinvey', data);
    }

    function postEdit(id, name, position, manager, phone) {
        let employees =  getById(id);
        let employee = employees[0];

        employee.name = name;
        employee.position = position;
        employee.manager = manager;
        employee.phone = phone;

        const endpoint = `${entity}/${id}`;

        return kinvey.update('appdata', endpoint, 'kinvey', employee);
    }

    function getById(id) {
        const data = {};
        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}", "_id":"${id}"}`;
        //const endpoint = `${entity}?query={"_id":"${id}"}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
    }

    function getAllMy() {
        const data = {};

        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}"}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
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
        deleteById,
        getAllMy,
        getById,
        postEdit
    }
})();


export default employeeService