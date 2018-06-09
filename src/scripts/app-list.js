const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
//list页
const listTpl = require('./views/list.html')
const brandTpl = require('./views/listBrand.html')
const classifyTpl = require('./views/listClassify.html')

const posListBoxTpl = require('./views/posListBox.html')
const posListBrandTpl = require('./views/posListBrand.html')

const indexController = require('./controllers/index')
const listController = require('./controllers/list')

$('#root').html(indexTpl)
$('.container').html(listTpl + footerTpl)
$('main').html(classifyTpl)


//点击【商品】就渲染【列表页】;点击导航栏 就 渲染数据
;(async () => {
    let html = await listController.render("/showList/list-category/getCateRelChild.shtml?cate_id=",492,posListBoxTpl)
    $(".classify_content").html(html)
    $("nav ul li").on("click",async function(){
        let data = $(this).attr("c_id")
        let hasStorage = "c_id="+data;
        if(sessionStorage.getItem(hasStorage) === null){
            html = await listController.render("/showList/list-category/getCateRelChild.shtml?cate_id=",data,posListBoxTpl)
        }else{
            storage = sessionStorage.getItem("c_id="+data);
            html = await listController.render("",data,posListBoxTpl)
        }
        $(".classify_content").html(html)
    })
})()

//点击品牌就切换到 【 品牌页 】
 $("header li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected")
     if(($(this).attr("id") == "classify")){
        $('main').html(classifyTpl)
     }else{
        $('main').html(brandTpl)
     }
    
 })


//轮播图
var swiper = new Swiper(".swiper-container",{
    loop:true,
    autoplay:true,
    pagination:{
        el:".swiper-pagination"
    }
})










//品牌页面加载
listController.navAction()
indexController.footerAction()
