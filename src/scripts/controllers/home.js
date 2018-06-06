const model = require('../model/home')
const poslistTpl = require('../views/poslist.html')

const homeController = {
    render(cb){
        model.find((result) => {
            // console.log(result);
            let html = template.render(poslistTpl, result)
            cb(html)
        })
    },
    renderBox(cb){
        model.customBox((result) => {
            // console.log(1);
            // console.log(result);
            cb(result)
        })
    }
}

module.exports = homeController