

async function request(type, uri, data){

}

async function getSearchMangas(query){
    const result = await request('get', '/series/', {query})
    return result;
}

module.exports = [
    getSearchMangas
]