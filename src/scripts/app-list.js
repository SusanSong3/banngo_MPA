const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
const listTpl = require('./views/list.html')

const indexController = require('./controllers/index')
const listController = require('./controllers/list')

$('#root').html(indexTpl)
$('.container').html(listTpl + footerTpl)

$("header li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected")
})
;(async ()=>{
    await listController.render(492)
    $("main nav ul li").on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        let data = $(this).attr("c_id")
        listController.render(data)
    })
})()


indexController.footerAction()
