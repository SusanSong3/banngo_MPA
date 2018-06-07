const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
const homeTpl = require('./views/home.html')

const indexController = require('./controllers/index')
const homeController = require('./controllers/home')

$('#root').html(indexTpl)
$('.container').html(homeTpl + footerTpl)

;(async () => {
    const html = await homeController.render()
    $('#poslist').html(html)
})() 

indexController.footerAction()