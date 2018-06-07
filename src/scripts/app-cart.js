const indexTpl = require('./views/index.html')
const footerTpl = require('./views/footer.html')
const cartTpl = require('./views/cart.html')

const indexController = require('./controllers/index')
const cartController = require('./controllers/cart')

$('#root').html(indexTpl)
$('.container').html(headerTpl + cartTpl + footerTpl)

$('#root main').html(cartController.render())

indexController.footerAction()
