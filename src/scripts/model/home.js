const model = {
    find(cb){
        // console.log(1);
        fetch('/plate/goods-list.shtml?productIds=226251%2C661231%2C226250%2C601898%2C602052%2C518437%2CA03833%2C241339%2C756236%2C753401%2C661265%2C246418%2CA03849%2C602027%2C602796%2C601204%2C661244%2CA03851%2C748019%2C661304%2C726419%2C602551%2CA01480%2C246417%2C661248%2C753405%2C602807%2C252166%2C602810%2C246423%2C753155%2C753447%2C661012%2C753306%2C246444%2C602009%2C602553%2C753147%2C756190%2C602094%2C252253%2C602764%2C226720%2C226589%2C202499%2C202353%2C201072%2C202671%2C202200%2C271447%2C202239%2C299097%2C&timestamp=')
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            cb(result);
        });
        
    },
    customBox(cb){
        // console.log(1);
        fetch('/plate/GetPlateContent?_ksTS=1528245982089_78&callback=jsonp79&mark=wap_index&plate_id=375')
        .then((res) => {//response => response.json()
        //    console.log(typeof res.text());
           return res.text()
        })
        .then(result => {
            console.log(result);
            cb(result);
        });
    }

}

module.exports = model