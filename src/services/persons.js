import axios from "axios"
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    const promise = axios.get(baseUrl);
    return promise.then((response) => response.data);
}

const create = (newPerson) => {
    const promise = axios.post(baseUrl, newPerson);
    return promise.then((response) => response.data);
}

const deleteOne = (id) => {
    const promise = axios.delete(baseUrl + `/${id}`);
    return promise.then((response) => response.status);
}

const update = (id, updatedPerson) => {
    const promise = axios.put(baseUrl + `/${id}`, updatedPerson);
    return promise.then((response) => response.data);
}

export default { getAll, create, deleteOne, update }