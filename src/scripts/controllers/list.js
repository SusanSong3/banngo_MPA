const list = require('../model/list')

const listController = {

    async render(url,data,templateBox){
        if(url === "") {//证明有缓存
            let storage = "c_id="+data
            let result = sessionStorage.getItem(storage);
            result = JSON.parse(result)
            var finalResult = result.data[0];
        }else{
            result = await list.find(url,data)
            finalResult = result.data[ 0];
        }
        var html = template.render(templateBox, finalResult)
        return html
    },
    navAction(){
        $('nav li').on('click',function(){
            $(this).addClass("selected").siblings().removeClass("selected")
        })
    },
    
}
module.exports = listController