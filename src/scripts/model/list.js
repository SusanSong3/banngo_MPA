const list = {
    find(url,data){
        return fetch(url+data)
        .then(response => response.json())
        .then(result => {
            if(data !== ""){
                sessionStorage.setItem("c_id="+data,JSON.stringify(result))
            }else{
                sessionStorage.setItem("brandList",JSON.stringify(result))
            }
            
            return result
        });
    },
}

module.exports = list