const list = {
    find(url,data){
        return fetch(url+data)
        .then(response => response.json())
        .then(result => {
            sessionStorage.setItem("c_id="+data,JSON.stringify(result))
            return result
        });
    },
}

module.exports = list