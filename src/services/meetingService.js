import kinvey from '../kinvey'

let meetingService = (() => {
    let entity = 'meetings';

    function create(name, description, location, startDate, endDate, startTime, endTime, employees) {
        const createdAt = new Date(Date.now()).toLocaleString().split(',')[0];

        const data = { name, description, location, startDate, startTime, endDate, endTime, employees, createdAt };

        const endpoint = `${entity}`;

        return kinvey.post('appdata', endpoint, 'kinvey', data);
    }

    async function postEdit(id, name, description, location, startDate, endDate, startTime, endTime, employees) {
        let meetings = await getById(id);
        let meeting = meetings.data[0];

        meeting.name = name;
        meeting.description = description;
        meeting.location = location;
        meeting.startDate = startDate;
        meeting.endDate = endDate;
        meeting.startTime = startTime;
        meeting.endTime = endTime;

        const endpoint = `${entity}/${id}`;

        return kinvey.update('appdata', endpoint, 'kinvey', meeting);
    }

    function getById(id) {
        const data = {};
        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}", "_id":"${id}"}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
    }

    function getAllMy() {
        const data = {};

        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}"}`;

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
        deleteById,
        getAllMy,
        getById,
        postEdit
    }
})();


export default meetingService