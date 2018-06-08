const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
const listTpl = require('./views/list.html')
<<<<<<< HEAD
<<<<<<< HEAD

//品牌
const listBrandTpl = require('./views/list_brand.html')
=======
const brandTpl = require('./views/brand.html')
// console.log(brandTpl);
>>>>>>> parent of 314f64b... 商品页-品牌
=======
const brandTpl = require('./views/brand.html')
const brandHotTpl = require('./views/brandHot.html')

>>>>>>> parent of a434210... error

const indexController = require('./controllers/index')
const listController = require('./controllers/list')

$('#root').html(indexTpl)
$('.container').html(listTpl + footerTpl)
<<<<<<< HEAD
<<<<<<< HEAD
// $('.container main').html(listClassifyTpl);

//right_content
;(async () => {
    let html = await listController.render("/showList/list-category/getCateRelChild.shtml?cate_id=492")
})()

// $("#brand").on("click",() => {
//     $('.container main').html(listBrandTpl);
//     $('.list_classify_content').html(listBrandHotTpl)
//     //listBrandHotTpl
//     ;(async () => {
//         await listController.renderBrandPage(498);
//         $("nav ul li").on("click",function(){
//             let data = $(this).attr("c_id")
//             listController.renderBrandPage(data)
//         })
//     })()
// })
=======
$('.container main').html(brandTpl)
>>>>>>> parent of 314f64b... 商品页-品牌
=======
$('.container main').html(brandTpl);
// $('.brand_content').html(posListBrandPageTpl);

>>>>>>> parent of a434210... error

var swiper = new Swiper(".swiper-container",{
    loop:true,
    autoplay:true,
    pagination:{
        el:".swiper-pagination"
    }
})

<<<<<<< HEAD
$("header li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected")
})

// ;(async ()=>{
//     await listController.render(492)
//     $("main nav ul li").on("click",function(){
//         $(this).addClass("selected").siblings().removeClass("selected");
//         let data = $(this).attr("c_id")
//         listController.render(data)
//     })
// })()

;(async () => {
    await listController.renderBrandPage(498);
    $("nav ul li").on("click",function(){
        let data = $(this).attr("c_id")
        listController.renderBrandPage(data)
    })
})()






//品牌页面加载
listController.renderBrand()
listController.navAction()
=======
// $("header li").on("click",function(){
//     $(this).addClass("selected").siblings().removeClass("selected")
// })
// ;(async ()=>{
//     await listController.render(492)
//     $("main nav ul li").on("click",function(){
//         $(this).addClass("selected").siblings().removeClass("selected");
//         let data = $(this).attr("c_id")
//         listController.render(data)
//     })
// })()
;(async () => {
    await listController.renderBrand()
})()

>>>>>>> parent of 314f64b... 商品页-品牌
indexController.footerAction()
