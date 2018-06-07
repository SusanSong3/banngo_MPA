const indexController = {
    footerAction(){
        const pagelist = ['index.html', 'list.html','cart.html','mine.html']
        $('footer li').on('click',function(){
            // console.log($(this).index());
            location.href = pagelist[$(this).index()]
        })
        let pathname = location.pathname.substr(1)
        let curIndex = pagelist.indexOf(pathname)
        curIndex = curIndex > 0 ? curIndex : 0;
        $('footer li').eq(curIndex).addClass("active").siblings().removeClass("active")
    }
}

module.exports = indexController