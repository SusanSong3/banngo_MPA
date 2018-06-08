const list = {
    find(data){
        return fetch("/showList/list-category/getCateRelChild.shtml?cate_id="+data)
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
    }
}

module.exports = list