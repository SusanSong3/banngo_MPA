const list = {
    find(data){
        // this.find_cid();
        return fetch('/showList/list-category/getCateRelChild.shtml?cate_id='+data)
        .then(response => response.json())
        .then(result => {
            return result
        });
    },
}

module.exports = list