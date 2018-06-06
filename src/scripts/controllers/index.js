const indexController = {
    footerAction(){
        const pagelist = ['index.html', 'list.html','cart.html','mine.html']
        $('footer li').on('click',function(){
            location.href = pagelist[$(this).index()]
        })
        let pathname = location.pathname.substr(1)
        let curIndex = pagelist.indexOf(pathname)
        $('footer li').eq(curIndex).addClass('active').siblings().removeClass('avtive')
    }
}

module.exports = indexController