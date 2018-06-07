const model = require('../model/home')
const poslistTpl = require('../views/poslist.html')

const homeController = {
    async render(){
        let result = await model.find()
        console.log(result);
        let html = template.render(poslistTpl, result)
        return html
    },
    
}

module.exports = homeController