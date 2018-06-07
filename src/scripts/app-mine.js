const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
const mineTpl = require('./views/mine.html')

const indexController = require('./controllers/index')
const mineController = require('./controllers/mine')

$('#root').html(indexTpl)
$('.container').html(headerTpl + mineTpl + footerTpl)

$('#root main').html(mineController.render())

indexController.footerAction()
