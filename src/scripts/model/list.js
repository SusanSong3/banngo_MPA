const list = {
    find(data){
        return fetch("/showList/list-category/getCateRelChild.shtml?cate_id="+data)
        .then(response => response.json())
        .then(result => {
            return result
        });
    },
<<<<<<< HEAD
=======
    findBrand(){
        return fetch('/showList/list-brand/getAssortBrandInfo.shtml')
        .then(response => response.json())
        .then(result => {
            return result
        });
    }
>>>>>>> parent of 314f64b... 商品页-品牌
}

module.exports = list