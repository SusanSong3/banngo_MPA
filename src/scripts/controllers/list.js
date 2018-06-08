const list = require('../model/list')
const posListBoxTpl = require('../views/posListBox.html')
const posListBrandTpl = require('../views/posListBrand.html')
const posListBrandPageTpl = require('../views/posListBrandPage.html')

const listController = {
    //分类渲染  默认492
    async render(data){
        let result = await list.find(data)
        // console.log(reseult);
        // let finalResult = result.data[0];
        // var html = template.render(posListBoxTpl, finalResult)
        // let finalhtml = html.substr(9)
        // return html;
    },
    async renderBrand(){
        let result = await list.find()
        var html = template.render(posListBrandPageTpl, result)
        return html;
    },
    navAction(){
        $('nav li').on('click',function(){
            $(this).addClass("selected").siblings().removeClass("selected")
        })
    }
    
}
module.exports = listController