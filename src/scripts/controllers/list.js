const list = require('../model/list')

const listController = {

    async render(url,data,templateBox){
        // console.log(data);
        if(url === "") {//证明有缓存
            let storage = "c_id="+data
            let result = sessionStorage.getItem(storage);
            result = JSON.parse(result)
            var finalResult = result.data[0];
        }else if(url !== ""){
            result = await list.find(url,data)
            finalResult = result.data[0];
        }
        if(data == ""){
            finalResult = await list.find(url,data)
            // console.log(finalResult);
        }
        var html = template.render(templateBox, finalResult)
        // console.log(html);
        return html
    },
    navAction(){
        $('nav li').on('click',function(){
            $(this).addClass("selected").siblings().removeClass("selected")
        })
    },
    
}
module.exports = listController