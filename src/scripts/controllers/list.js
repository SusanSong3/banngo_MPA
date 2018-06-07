const list = require('../model/list')
const posListBoxTpl = require('../views/posListBox.html')

const listController = {
    async render(data){
        let result = await list.find(data)
        let finalResult = result.data[0];
        // console.log(finalResult.children)
        var html = template.render(posListBoxTpl, finalResult)
        // console.log(html);
        var htmlArr = htmlArr + html;

        // console.log(htmlArr);
        let finalhtml = htmlArr.substr(9)
        $('.content').html(finalhtml);
        // return htmlArr

    },
    
}
module.exports = listController