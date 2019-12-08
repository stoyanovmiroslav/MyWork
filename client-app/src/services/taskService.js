import kinvey from '../kinvey'

let taskService = (() => {
    let entity = 'tasks';

    function create(name, description, points, deadline) {
        const createdAt = new Date(Date.now()).toLocaleString().split(',')[0]
        const data = {name, description, points, deadline, createdAt};

        const endpoint = `${entity}`;

        return kinvey.post('appdata', endpoint, 'kinvey', data);
    }

    // async function postEdit(id, name, position, manager, phone, hireDate) {
    //     let employees = await getById(id);
    //     let employee = employees.data[0];

    //     employee.name = name;
    //     employee.position = position;
    //     employee.manager = manager;
    //     employee.phone = phone;
    //     employee.hireDate = hireDate;

    //     const endpoint = `${entity}/${id}`;

    //     return kinvey.update('appdata', endpoint, 'kinvey', employee);
    // }

    // function getById(id) {
    //     const data = {};
    //     let userId = sessionStorage.getItem('userId');
    //     const endpoint = `${entity}?query={"_acl.creator":"${userId}", "_id":"${id}"}`;
    //     //const endpoint = `${entity}?query={"_id":"${id}"}`;

    //     return kinvey.get('appdata', endpoint, 'kinvey', data);
    // }

    // function getAllMy() {
    //     const data = {};

    //     let userId = sessionStorage.getItem('userId');
    //     const endpoint = `${entity}?query={"_acl.creator":"${userId}"}`;

    //     return kinvey.get('appdata', endpoint, 'kinvey', data);
    // }

    // function getAll() {
    //     const data = {};

    //     const endpoint = `${entity}?query={}`;
    //     //const endpoint = `${entity}?query={}&sort={"peopleInterestedIn": -1}`;

    //     return kinvey.get('appdata', endpoint, 'kinvey', data);
    // }

    // function deleteById(id) {
    //     const data = {};

    //     let userId = sessionStorage.getItem('userId');
    //     const endpoint = `${entity}?query={"_acl.creator":"${userId}", "_id":"${id}"}`;

    //     return kinvey.remove('appdata', endpoint, 'kinvey', data);
    //}

    return {
        create
        // getAll,
        // deleteById,
        // getAllMy,
        // getById,
        // postEdit
    }
})();


export default taskService