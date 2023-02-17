import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/notes",data);
}

const get = id =>{
    return httpClient.get(`/notes/${id}`);
}

const remove = id => {
    return httpClient.delete(`/notes/${id}`)
}

const update = data => {
    return httpClient.put('/notes', data);  //ova notes e fakticki od controlerot za da znet koj metod
}

export default { getAll,create, get, remove, update };