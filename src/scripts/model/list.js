const list = {
    find(data){
        // this.find_cid();
        return fetch('/showList/list-category/getCateRelChild.shtml?cate_id='+data)
        .then(response => response.json())
        .then(result => {
            return result
        });
    },
    findBrand(){
        return fetch('/showList/list-brand/getAssortBrandInfo.shtml')
        .then(response => response.json())
        .then(result => {
            return result
        });
<<<<<<< HEAD
=======
    },
    findBrandPage(data){
        return fetch('/showList/list-category/getCateRelBrandInfo.shtml?cate_id='+data)
        .then(response => response.json())
        .then(result => {
            return result
        });
>>>>>>> parent of a434210... error
    }
}

module.exports = list