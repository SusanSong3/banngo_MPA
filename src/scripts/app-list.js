const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
//list页
const listTpl = require('./views/list.html')

//品牌
const listBrandTpl = require('./views/list_brand.html')

const indexController = require('./controllers/index')
const listController = require('./controllers/list')


$('#root').html(indexTpl)
$('.container').html(listTpl + footerTpl)
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

//轮播图
var swiper = new Swiper(".swiper-container",{
    loop:true,
    autoplay:true,
    pagination:{
        el:".swiper-pagination"
    }
})

$("header li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected")
})

//业务逻辑：
//商品页进来，请求render，点击切换；
//点击品牌发送492，请求renderpage，点击切换；

;(async ()=>{
    await listController.render(492)
    $("#list_classify ul li").on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        let data = $(this).attr("c_id")
        listController.render(data)
    })
})()








//品牌页面加载
listController.navAction()
indexController.footerAction()
