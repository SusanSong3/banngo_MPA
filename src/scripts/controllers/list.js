const list = require('../model/list')
const posListBoxTpl = require('../views/posListBox.html')
const posListBrandTpl = require('../views/posListBrand.html')

const listController = {
    //分类渲染  默认492
    async render(data){
        let result = await list.find(data)
<<<<<<< HEAD
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
=======
        let finalResult = result.data[0];
        // console.log(finalResult.children)
        var html = template.render(posListBoxTpl, finalResult)
        // console.log(html);
        var htmlArr = htmlArr + html;

        // console.log(htmlArr);
        let finalhtml = htmlArr.substr(9)
        $('.content').html(finalhtml);
        // return htmlArr

    },
    async renderBrand(){
        let result = await list.findBrand()
        console.log(result);
        var html = template.render(posListBrandTpl, result)
        console.log(html);
        // var htmlArr = htmlArr + html;

        // // console.log(htmlArr);
        // let finalhtml = htmlArr.substr(9)
        // $('.content').html(finalhtml);
        // // return htmlArr

    },
>>>>>>> parent of 314f64b... 商品页-品牌
    
}
module.exports = listController