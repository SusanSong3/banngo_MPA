const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const homeTpl = require('./views/home.html')

const homeController = require('./controllers/home')
const indexController = require('./controllers/index')

$('#root').html(indexTpl)
$('.container').html(headerTpl + homeTpl + footerTpl)

homeController.render((html) => {
    $('#poslist').html(html)
    // console.log(1);
})
homeController.renderBox((result) => {
    
    // console.log(result);
})

indexController.footerAction()