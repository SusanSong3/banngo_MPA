const list = require('../model/list')
const posListBoxTpl = require('../views/posListBox.html')
const posListBrandTpl = require('../views/posListBrand.html')

const listController = {
    async render(data){
        let result = await list.find(data)
        let finalResult = result.data[0];
<<<<<<< HEAD
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
=======
        var html = template.render(posListBoxTpl, finalResult)
        var htmlArr = htmlArr + html;
        let finalhtml = htmlArr.substr(9)
        $('.content').html(finalhtml);
    },
    async renderBrand(){
        let result = await list.findBrand()
        // console.log(result);
        var brandhtml = template.render(posListBrandPageTpl, result)
        $('.brandList dl').html(brandhtml)
    },
    async renderBrandPage(data){
        let result = await list.findBrandPage(data)
        // console.log(result);
        // let finamResult = result.data
        var brandPagehtml = template.render(posListBrandPageTpl, result)
        // console.log(brandPagehtml);
        $('.brand_content').html(brandPagehtml)
    },
    navAction(){
        // const brandNavList = ['index.html', 'list.html','cart.html','mine.html']
        $('nav li').on('click',function(){
            $(this).addClass("selected").siblings().removeClass("selected")
            // location.href = pagelist[$(this).index()]
        })
        // let pathname = location.pathname.substr(1)
        // let curIndex = pagelist.indexOf(pathname)
        // curIndex = curIndex > 0 ? curIndex : 0;
        // $('footer li').eq(curIndex).addClass("active").siblings().removeClass("active")
    }
>>>>>>> parent of a434210... error
    
}
module.exports = listController